import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Foundation Gifts",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Foundation Gifts"
        subtitle="Honoring Ryan's legacy through lasting investments in tennis and community."
        centered
      />

      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <figure className="flex w-full flex-col overflow-hidden rounded-xl border border-uk-blue/15 bg-uk-blue-light">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/uk-courts.png"
                alt="Ryan C. Holder Center Courts, Hilary J. Boone Complex, University of Kentucky"
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>
            <figcaption className="border-t border-uk-blue/10 px-4 py-3 text-center text-sm font-semibold leading-snug text-uk-blue">
              Ryan C. Holder Center Courts, Hilary J. Boone Complex, University
              of Kentucky
            </figcaption>
          </figure>

          <div className="max-w-prose space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              The Ryan Holder Championships Foundation was established to carry
              forward Ryan C. Holder&apos;s passion for tennis and his commitment to
              excellence on and off the court.
            </p>
            <p>
              Among the foundation&apos;s most significant gifts is support for the
              Ryan C. Holder Center Courts at the University of Kentucky — a
              lasting tribute that gives young athletes a world-class place to
              train, compete, and grow.
            </p>
            <p>
              Through the annual Ryan Holder Junior Championships and ongoing
              community partnerships, the foundation continues to invest in the
              next generation of Kentucky tennis players.
            </p>
          </div>
        </div>
      </div>

      <section className="border-y border-uk-blue/10 bg-uk-blue-light">
        <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-6">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-uk-blue">
                Upcoming Project
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug text-uk-blue">
                Shillito Park Lights Project
              </h2>
            </div>

            <div className="max-w-prose space-y-5 text-base leading-relaxed text-foreground/80 lg:col-start-1 lg:row-start-2">
              <p>
                The Ryan Holder Foundation is supporting an upcoming project to
                install lights on all eight courts at Shillito Park in Lexington.
              </p>
              <p>
                Through a foundation grant, this effort will extend playing hours
                for junior and adult players across the city — giving more young
                athletes a place to train and compete after school and into the
                evening, in keeping with Ryan&apos;s love of the game.
              </p>
              <p>
                Shillito Park is one of Lexington&apos;s busiest public tennis
                facilities. Lighting the courts will make the complex more usable
                year-round and help the foundation continue investing in
                opportunities for Kentucky tennis players.
              </p>
            </div>

            <figure className="flex w-full flex-col overflow-hidden rounded-xl border border-uk-blue/15 bg-white lg:col-start-2 lg:row-start-2 lg:self-center">
              <div className="relative aspect-[610/378] w-full">
                <Image
                  src="/images/shillito-park.png"
                  alt="Shillito Park tennis courts in Lexington, Kentucky"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <figcaption className="border-t border-uk-blue/10 px-4 py-3 text-center text-sm font-semibold leading-snug text-uk-blue">
                Shillito Park, Lexington, KY
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
