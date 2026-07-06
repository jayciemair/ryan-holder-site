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
        centered
        variant="julie"
      />

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
            <div className="flex flex-col items-center gap-4 pt-2">
              <a
                href={site.julieDittyFoundationUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit the Julie Ditty Qualls Foundation"
                className="block w-48 transition hover:opacity-90 sm:w-56 lg:w-64"
              >
                <Image
                  src="/images/julie-1.png"
                  alt="Julie Ditty Qualls Foundation logo"
                  width={806}
                  height={804}
                  className="h-auto w-full object-contain"
                />
              </a>
              <a
                href={site.julieDittyFoundationUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit the Julie Ditty Qualls Foundation"
                className="inline-flex items-center gap-2 text-julie-pink transition hover:opacity-80"
                aria-label="Visit the Julie Ditty Qualls Foundation"
              >
                <span className="text-sm font-semibold sm:text-base">
                  Visit the Foundation
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
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
