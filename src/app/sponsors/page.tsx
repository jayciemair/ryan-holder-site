import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { sponsors } from "@/lib/site";

export const metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        title="Sponsors"
        subtitle="We are grateful for the generous support of the Ryan Holder Championships Foundation sponsors."
        centered
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {sponsors.map((sponsor) => {
            const content = (
              <>
                <div className="flex h-40 w-full items-center justify-center">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.alt}
                    width={280}
                    height={160}
                    className="max-h-36 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-6 text-center text-lg font-semibold text-uk-blue sm:text-xl">
                  {sponsor.name}
                </p>
              </>
            );

            return (
              <div
                key={sponsor.name}
                className="flex flex-col items-center rounded-xl border border-uk-blue/15 bg-white p-8"
              >
                {"url" in sponsor && sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full flex-col items-center transition hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
