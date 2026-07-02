import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Mission",
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        title="Mission Statement"
        subtitle="Inspiring young athletes through tennis, sportsmanship, and community."
        centered
      />

      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex max-w-prose flex-col justify-center space-y-5">
            <blockquote className="border-l-4 border-uk-blue pl-6 text-lg leading-relaxed text-foreground/85 italic">
              &ldquo;The Ryan Holder Championships Foundation exists to honor the memory
              of Ryan C. Holder by promoting tennis, fostering sportsmanship, and
              providing opportunities for young athletes to develop their skills and
              character both on and off the court.&rdquo;
            </blockquote>

            <p className="text-base leading-relaxed text-foreground/80">
              Ryan&apos;s love of the game and his competitive spirit continue to
              inspire the foundation&apos;s work. Through the annual championships,
              facility investments, and community outreach, we strive to give every
              young player the chance to experience the joy and discipline that
              tennis brought to Ryan&apos;s life.
            </p>
          </div>

          <figure className="flex w-full flex-col overflow-hidden rounded-xl border border-uk-blue/15 bg-uk-blue-light">
            <div className="relative aspect-[716/709] w-full">
              <Image
                src="/images/ryan-memorial-plaque.png"
                alt="Memorial plaque honoring Ryan C. Holder"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
            <figcaption className="border-t border-uk-blue/10 px-4 py-3 text-center text-sm font-semibold leading-snug text-uk-blue">
              Ryan C. Holder Memorial Plaque
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
