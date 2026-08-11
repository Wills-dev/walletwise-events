import EventCard from "@/components/atom/EventCard/EventCard";
import EventCardSkeleton from "@/components/atom/skeleton/EventCardSkeleton";

import { formatEventDate } from "@/lib/helpers/formatEventDate";
import { EventType } from "@/lib/types";

const PastEvents = ({
  events,
  isLoading,
}: {
  events: EventType[];
  isLoading: boolean;
}) => {
  return (
    <div className="space-y-4">
      <h6 className="text-[#262626] font-semibold sm:text-[20px] text-lg">
        Past Events
      </h6>
      <div className="flex gap-4 flex-wrap">
        {isLoading ? (
          <EventCardSkeleton />
        ) : (
          <>
            {events?.map((item) => (
              <EventCard
                key={item?.title}
                imgUrl={item?.imageUrl}
                category={item?.category}
                amount={item?.computed.lowestTicketPrice}
                date={formatEventDate(
                  item.eventId,
                  item.computed.formattedDate,
                )}
                eventName={item?.title}
                location={item?.address}
                link={`/event/past/${item.eventId}`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PastEvents;
