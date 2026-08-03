import { EventImage, EventType } from "@/lib/types";

const getImageUrl = (image: EventImage) => {
  if (typeof image === "string") return image;

  return image.url || image.imageUrl || image.secure_url;
};

export const getEventGallery = (event: EventType) => {
  const uploadedImages =
    event.gallery ||
    event.galleryImages ||
    event.images ||
    event.eventImages ||
    [];

  return uploadedImages
    .map((image) => ({
      src: getImageUrl(image),
      alt: typeof image === "string" ? event.title : image.alt || event.title,
    }))
    .filter((image): image is { src: string; alt: string } => Boolean(image.src));
};
