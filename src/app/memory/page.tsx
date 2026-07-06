import { PageHeader } from "@/components/PageHeader";
import { MemoryBoard } from "@/components/MemoryBoard";
import { MemoryForm } from "@/components/MemoryForm";
import { getApprovedMemories, isMemoryBoardConfigured } from "@/lib/memories";

export const metadata = {
  title: "Memory Board",
};

export default async function MemoryPage() {
  const configured = isMemoryBoardConfigured();
  const memories = configured ? await getApprovedMemories() : [];

  return (
    <>
      <PageHeader
        title="Ryan's Memory Board"
        subtitle="Share photos and messages in honor of Ryan C. Holder."
        centered
      />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-12">
          <MemoryForm configured={configured} />

          <div>
            <h2 className="text-xl font-bold text-uk-blue">Memories shared</h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Stories and photos from family, friends, and the tennis community.
            </p>
            <div className="mt-6">
              <MemoryBoard memories={memories} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
