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
      {isJulie && children ? (
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8 sm:gap-6 sm:px-8 sm:py-10">
          <div className="min-w-0 text-left">
            <h1 className="text-xl font-bold tracking-tight text-white text-balance sm:text-2xl lg:text-3xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg">
                {subtitle}
              </p>
            )}
          </div>
          <div className="shrink-0">{children}</div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
