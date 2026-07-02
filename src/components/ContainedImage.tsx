import Image from "next/image";

type ContainedImageProps = {
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

const sizeHeights = {
  xs: "h-28",
  sm: "h-36",
  md: "h-48",
  lg: "h-64",
} as const;

export function ContainedImage({
  src,
  alt,
  size = "md",
  priority = false,
  className = "",
}: ContainedImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-uk-blue/15 bg-uk-blue-light ${sizeHeights[size]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain p-2"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
}
