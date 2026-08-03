import InfoColumn from "@/components/atom/InfoColumn/InfoColumn";
import { formatEventDate } from "@/lib/helpers/formatEventDate";
import { numberWithCommas } from "@/lib/helpers/formatNumber";
import { EventType } from "@/lib/types";
import { Calendar, MapPin, Ticket, Timer, Users } from "lucide-react";

const PastEventInfo = ({ event }: { event: EventType }) => {
  const time =
    event.computed.formattedTime ||
    [event.time, event.endTime].filter(Boolean).join(" - ") ||
    "N/A";
  const price = event.computed.lowestTicketPrice;

  return (
    <section className="space-y-5 rounded-[16px] border border-[#E5E5E5] p-5 sm:p-6">
      <h2 className="font-semibold">Event info</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <InfoColumn
          Icon={Calendar}
          label="Date"
          value={formatEventDate(event.eventId, event.computed.formattedDate)}
        />
        <InfoColumn Icon={Timer} label="Time" value={time} />
        <InfoColumn Icon={MapPin} label="Venue" value={event.address} />
        <InfoColumn
          Icon={Ticket}
          label="Ticket price"
          value={`From ₦${numberWithCommas(price)}`}
        />
        <InfoColumn
          Icon={Users}
          label={event.attendance === undefined ? "Capacity" : "Attendance"}
          value={
            event.attendance === undefined
              ? event.computed.capacityFormatted
              : `${numberWithCommas(event.attendance)} people`
          }
        />
      </div>
    </section>
  );
};

export default PastEventInfo;
