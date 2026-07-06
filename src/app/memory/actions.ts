"use server";

import { revalidatePath } from "next/cache";
import {
  createMemoryAdminClient,
  isMemoryBoardConfigured,
} from "@/lib/memories";

const MAX_NAME = 80;
const MAX_MESSAGE = 1000;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

export type SubmitMemoryState = {
  ok: boolean;
  message: string;
};

export async function submitMemory(
  _prev: SubmitMemoryState,
  formData: FormData,
): Promise<SubmitMemoryState> {
  if (!isMemoryBoardConfigured()) {
    return {
      ok: false,
      message:
        "The memory board is not set up yet. Please check back soon or contact the foundation.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const photo = formData.get("photo");

  if (!name || name.length > MAX_NAME) {
    return { ok: false, message: "Please enter your name (80 characters max)." };
  }

  if (!message || message.length > MAX_MESSAGE) {
    return {
      ok: false,
      message: "Please share a memory (1000 characters max).",
    };
  }

  let imageUrl: string | null = null;

  try {
    const supabase = createMemoryAdminClient();

    if (photo instanceof File && photo.size > 0) {
      if (!ALLOWED_IMAGE_TYPES.has(photo.type)) {
        return {
          ok: false,
          message: "Photos must be JPG, PNG, WebP, or GIF.",
        };
      }

      if (photo.size > MAX_IMAGE_BYTES) {
        return { ok: false, message: "Photos must be 5 MB or smaller." };
      }

      const extension = photo.name.split(".").pop()?.toLowerCase() || "jpg";
      const fileName = `${crypto.randomUUID()}.${extension}`;
      const filePath = `uploads/${fileName}`;

      const buffer = Buffer.from(await photo.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from("memory-photos")
        .upload(filePath, buffer, {
          contentType: photo.type,
          upsert: false,
        });

      if (uploadError) {
        console.error(uploadError);
        return {
          ok: false,
          message: "We could not upload your photo. Please try again.",
        };
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("memory-photos").getPublicUrl(filePath);

      imageUrl = publicUrl;
    }

    const autoApprove = process.env.MEMORY_AUTO_APPROVE === "true";

    const { error: insertError } = await supabase.from("memories").insert({
      name,
      message,
      image_url: imageUrl,
      approved: autoApprove,
    });

    if (insertError) {
      console.error(insertError);
      return {
        ok: false,
        message: "We could not save your memory. Please try again.",
      };
    }

    revalidatePath("/memory");

    return {
      ok: true,
      message: autoApprove
        ? "Thank you — your memory has been shared."
        : "Thank you — your memory was submitted and will appear after a quick review.",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}
