import Image from "next/image";
import Link from "next/link";
import { homeSlides, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-uk-blue px-8 py-14 text-white sm:px-12 lg:min-h-[520px] lg:px-16 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Ryan Holder Championships Foundation
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Honoring a legacy on and off the court
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            {site.ryan.memorial}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/mission"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-uk-blue transition hover:bg-uk-blue-light"
            >
              Our Mission
            </Link>
            <a
              href={site.tournament.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Register for Tournament
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-10 lg:min-h-[520px] lg:px-10">
          <Image
            src="/images/parents-1.png"
            alt="Ryan Holder's parents at the courts dedication"
            width={420}
            height={520}
            priority
            className="h-auto max-h-[480px] w-full max-w-[420px] object-contain"
          />
        </div>
      </section>

      <section className="border-y border-uk-blue/10 bg-uk-blue-light">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-uk-blue">
                2026 Tournament
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug text-uk-blue sm:text-3xl">
                {site.tournament.name}
              </h2>
            </div>

            <div>
              <p className="leading-relaxed text-foreground/80">
                The Ryan Holder Junior Championships will be played from{" "}
                <strong className="text-uk-blue">{site.tournament.dates}</strong>{" "}
                in <strong className="text-uk-blue">{site.tournament.location}</strong>.
                Register through USTA to compete in this annual event honoring
                Ryan&apos;s legacy in Kentucky junior tennis.
              </p>
              <a
                href={site.tournament.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-uk-blue px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View on USTA
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-uk-blue/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-uk-blue">
              In Ryan&apos;s Memory
            </p>
            <h2 className="mt-2 text-2xl font-bold text-uk-blue sm:text-3xl">
              Carrying his spirit forward
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Ryan&apos;s parents and the Lexington tennis community continue to
              honor his passion for the game through the foundation, the annual
              championships, and investments in facilities that give young
              athletes a place to compete and grow.
            </p>
            <Link
              href="/memory"
              className="mt-5 inline-block rounded-full bg-uk-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Visit the memory board
            </Link>
            <Link
              href="/about"
              className="mt-3 block text-sm font-semibold text-uk-blue hover:underline"
            >
              Read about foundation gifts →
            </Link>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col gap-3 sm:gap-4">
            {homeSlides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                width={3240}
                height={1913}
                quality={100}
                unoptimized
                priority={index === 0}
                className="h-auto w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
