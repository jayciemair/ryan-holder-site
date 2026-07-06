import Image from "next/image";
import type { Memory } from "@/lib/memories";

type MemoryBoardProps = {
  memories: Memory[];
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function MemoryBoard({ memories }: MemoryBoardProps) {
  if (memories.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-uk-blue/25 bg-uk-blue-light/50 px-6 py-12 text-center">
        <p className="text-lg font-semibold text-uk-blue">No memories yet</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          Be the first to share a story or photo about Ryan.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {memories.map((memory) => (
        <article
          key={memory.id}
          className="flex flex-col overflow-hidden rounded-xl border border-uk-blue/15 bg-white shadow-sm"
        >
          {memory.image_url && (
            <div className="relative aspect-[4/3] w-full bg-uk-blue-light">
              <Image
                src={memory.image_url}
                alt={`Photo shared by ${memory.name}`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-foreground/85">
              {memory.message}
            </p>
            <footer className="mt-4 border-t border-uk-blue/10 pt-4">
              <p className="text-sm font-semibold text-uk-blue">{memory.name}</p>
              <p className="mt-0.5 text-xs text-foreground/50">
                {formatDate(memory.created_at)}
              </p>
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
}
