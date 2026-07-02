import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { pastWinners } from "@/lib/site";

export const metadata = {
  title: "Past Winners",
};

export default function PastWinnersPage() {
  return (
    <>
      <PageHeader
        title="Past Winners"
        subtitle="Celebrating the champions who have carried Ryan's legacy forward."
        centered
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="space-y-8">
          {pastWinners.map((winner) => (
            <article
              key={winner.name}
              className="flex flex-col gap-6 overflow-hidden rounded-xl border border-uk-blue/15 bg-white sm:flex-row"
            >
              <div className="flex w-full shrink-0 items-center justify-center bg-uk-blue-light p-4 sm:w-44">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  width={160}
                  height={200}
                  className="h-44 w-36 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:py-8">
                <h2 className="text-xl font-bold text-uk-blue">{winner.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {winner.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
