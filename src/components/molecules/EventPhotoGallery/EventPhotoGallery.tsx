import Image from "next/image";
import { Images } from "lucide-react";

const EventPhotoGallery = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  return (
    <section className="space-y-4">
      <h2 className="font-semibold">Photo gallery</h2>
      {images.length ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative min-h-58 overflow-hidden rounded-xl ${
                index === 0 && images.length > 2 ? "lg:row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-52 flex-col items-center justify-center gap-3 rounded-[16px] border border-dashed border-[#D4D4D4] bg-[#FAFAFA] px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EBFC] text-[#5A27CC]">
            <Images aria-hidden="true" size={24} />
          </div>
          <div className="space-y-1">
            <p className="font-medium">No event photos yet</p>
            <p className="text-sm text-[#737373]">
              Photos from this event have not been uploaded.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventPhotoGallery;
