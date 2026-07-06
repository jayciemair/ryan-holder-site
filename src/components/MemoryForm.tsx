"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitMemory, type SubmitMemoryState } from "@/app/memory/actions";

const initialState: SubmitMemoryState = { ok: false, message: "" };

type MemoryFormProps = {
  configured: boolean;
};

export function MemoryForm({ configured }: MemoryFormProps) {
  const [state, formAction, pending] = useActionState(submitMemory, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  if (!configured) {
    return (
      <div className="rounded-xl border border-uk-blue/15 bg-uk-blue-light p-6 text-sm leading-relaxed text-foreground/80">
        The memory board is being set up. Soon you&apos;ll be able to share photos
        and messages here.
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="rounded-xl border border-uk-blue/15 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-uk-blue">Share a memory</h2>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
        Tell a story, leave a note, or share a photo of Ryan. Submissions are
        reviewed before they appear on the board.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="memory-name" className="block text-sm font-semibold text-uk-blue">
            Your name
          </label>
          <input
            id="memory-name"
            name="name"
            type="text"
            required
            maxLength={80}
            className="mt-1.5 w-full rounded-lg border border-uk-blue/20 px-3 py-2.5 text-sm outline-none ring-uk-blue/30 focus:border-uk-blue focus:ring-2"
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label
            htmlFor="memory-message"
            className="block text-sm font-semibold text-uk-blue"
          >
            Your memory
          </label>
          <textarea
            id="memory-message"
            name="message"
            required
            maxLength={1000}
            rows={5}
            className="mt-1.5 w-full resize-y rounded-lg border border-uk-blue/20 px-3 py-2.5 text-sm outline-none ring-uk-blue/30 focus:border-uk-blue focus:ring-2"
            placeholder="Share a favorite story, moment, or message..."
          />
        </div>

        <div>
          <label htmlFor="memory-photo" className="block text-sm font-semibold text-uk-blue">
            Photo <span className="font-normal text-foreground/50">(optional)</span>
          </label>
          <input
            id="memory-photo"
            name="photo"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="mt-1.5 block w-full text-sm text-foreground/70 file:mr-3 file:rounded-full file:border-0 file:bg-uk-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:opacity-90"
          />
          <p className="mt-1 text-xs text-foreground/50">JPG, PNG, WebP, or GIF · 5 MB max</p>
        </div>
      </div>

      {state.message && (
        <p
          className={`mt-4 text-sm font-medium ${
            state.ok ? "text-green-700" : "text-red-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 rounded-full bg-uk-blue px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Submit memory"}
      </button>
    </form>
  );
}
