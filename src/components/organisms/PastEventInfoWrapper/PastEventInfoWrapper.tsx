"use client";

import Container from "@/components/atom/Container/Container";
import EventInfoSkeleton from "@/components/atom/skeleton/EventInfoSkeleton";
import EventLineUp from "@/components/molecules/EventLineUp/EventLineUp";
import EventPhotoGallery from "@/components/molecules/EventPhotoGallery/EventPhotoGallery";
import PastEventHero from "@/components/molecules/PastEventHero/PastEventHero";
import PastEventHighlights from "@/components/molecules/PastEventHighlights/PastEventHighlights";
import PastEventInfo from "@/components/molecules/PastEventInfo/PastEventInfo";
import Header from "@/components/organisms/Header/Header";
import { getEventGallery } from "@/lib/helpers/getEventGallery";
import { useGetEventInfo } from "@/lib/hooks/useGetEventInfo";

const PastEventInfoWrapper = ({ eventId }: { eventId: string }) => {
  const { data: event, isLoading } = useGetEventInfo(eventId);

  if (isLoading || !event) return <EventInfoSkeleton />;

  const gallery = getEventGallery(event);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PastEventHero event={event} />
      <Container className="xl:px-14">
        <div className="mx-auto max-w-212 space-y-10 py-8 sm:py-12">
          <PastEventHighlights event={event} />
          <section className="space-y-3">
            <h2 className="font-semibold">About this event</h2>
            <p className="whitespace-pre-line text-sm leading-6">
              {event.description}
            </p>
          </section>
          <PastEventInfo event={event} />
          <EventPhotoGallery images={gallery} />
          <EventLineUp id={event.eventId} />
        </div>
      </Container>
    </div>
  );
};

export default PastEventInfoWrapper;
