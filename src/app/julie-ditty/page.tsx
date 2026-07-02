import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata = {
  title: "Julie Ditty",
};

export default function JulieDittyPage() {
  return (
    <>
      <PageHeader
        title="Julie Ditty Qualls Foundation"
        subtitle="#PlayLikeJulie · #LiveLikeJulie"
        variant="julie"
      >
        <a
          href={site.julieDittyFoundationUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit the Julie Ditty Qualls Foundation"
          className="inline-block w-14 transition hover:opacity-90 sm:w-16"
        >
          <figure className="overflow-hidden rounded-lg border border-white/40 bg-white shadow-sm">
            <Image
              src="/images/julie-1.png"
              alt="Visit the Julie Ditty Qualls Foundation"
              width={406}
              height={402}
              className="h-auto w-full object-contain p-1"
            />
          </figure>
        </a>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-neutral-800">
            <p>
              Julie Ditty was a professional tennis player from Lexington,
              Kentucky, who became one of the most accomplished American
              women&apos;s players of her generation. A standout junior and
              collegiate athlete, she went on to compete on the WTA Tour,
              achieving a career-high singles ranking inside the world&apos;s top
              100 and representing the United States in international
              competition.
            </p>
            <p>
              Beyond her success on the court, Julie was known for her
              character, determination, and commitment to giving back to her
              community, leaving a lasting legacy that continues through the
              Julie Ditty Qualls Foundation.
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-julie-pink/25 bg-julie-pink-light">
            <Image
              src="/images/julie-2.png"
              alt="Julie Ditty Qualls on the tennis court"
              width={854}
              height={1194}
              className="mx-auto h-auto max-h-[min(70vh,560px)] w-full object-contain p-4"
              priority
            />
            <figcaption className="border-t border-julie-pink/20 px-4 py-3 text-center text-sm font-semibold text-julie-pink">
              Julie Ditty Qualls
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
