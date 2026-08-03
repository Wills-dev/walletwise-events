import InfoRow from "@/components/atom/InfoRow/InfoRow";
import { EventType } from "@/lib/types";

const PastEventHero = ({ event }: { event: EventType }) => (
  <section
    className="relative flex min-h-87 items-end bg-cover bg-center px-4 py-6 text-white sm:min-h-134 sm:px-12 sm:py-9"
    style={{ backgroundImage: `url(${event.imageUrl})` }}
  >
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/10" />
    <div className="relative z-10 max-w-3xl space-y-3">
      <span className="inline-flex rounded-full border border-white/20 bg-black/50 px-2 py-1 text-xs font-semibold">
        Past Event
      </span>
      <h1 className="text-3xl font-extrabold uppercase leading-none sm:text-5xl">
        {event.title}
      </h1>
      <div className="flex flex-wrap gap-4 text-xs">
        <InfoRow iconUrl="/assets/icons/MapPin.svg" desc={event.address} />
        {event.computed.formattedTime && (
          <InfoRow
            iconUrl="/assets/icons/Timer.png"
            desc={event.computed.formattedTime}
          />
        )}
      </div>
    </div>
  </section>
);

export default PastEventHero;
