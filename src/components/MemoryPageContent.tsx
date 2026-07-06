"use client";

import { useState } from "react";
import { MemoryBoard } from "@/components/MemoryBoard";
import { MemoryForm } from "@/components/MemoryForm";
import type { Memory } from "@/lib/memories";

type MemoryPageContentProps = {
  memories: Memory[];
  autoApprove: boolean;
};

export function MemoryPageContent({
  memories,
  autoApprove,
}: MemoryPageContentProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-10">
      <section>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-uk-blue">Memories shared</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            Stories and photos from family, friends, and the tennis community.
          </p>
        </div>
        <div className="mt-8">
          <MemoryBoard memories={memories} />
        </div>
      </section>

      <div className="flex flex-col items-center gap-8">
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="rounded-full bg-uk-blue px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Share a memory
          </button>
        )}

        {showForm && (
          <div className="w-full max-w-2xl">
            <MemoryForm
              autoApprove={autoApprove}
              onCancel={() => setShowForm(false)}
              onSuccess={() => setShowForm(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
