import { ContainedImage } from "@/components/ContainedImage";

type PhotoGalleryProps = {
  photos: readonly { src: string; alt: string }[];
};

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo) => (
        <ContainedImage key={photo.src} src={photo.src} alt={photo.alt} size="sm" />
      ))}
    </div>
  );
}
