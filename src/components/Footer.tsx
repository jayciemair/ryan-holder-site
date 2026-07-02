import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-uk-blue/20 bg-uk-blue text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            Honoring Ryan&apos;s legacy through tennis, community, and opportunity
            for young athletes in Lexington and beyond.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Explore
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
