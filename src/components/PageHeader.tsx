import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "default" | "julie";
  children?: ReactNode;
};

export function PageHeader({
  title,
  subtitle,
  centered = false,
  variant = "default",
  children,
}: PageHeaderProps) {
  const isJulie = variant === "julie";

  return (
    <div
      className={`border-b ${
        isJulie
          ? "border-julie-pink/30 bg-julie-pink"
          : "border-uk-blue/15 bg-uk-blue"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-14${centered ? " text-center" : ""}`}
      >
          <h1 className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 text-lg leading-relaxed text-white/80${
                centered ? " mx-auto max-w-4xl text-balance" : " lg:whitespace-nowrap"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className={`mt-8${centered ? " flex justify-center" : ""}`}>
              {children}
            </div>
          )}
        </div>
    </div>
  );
}
