import { Music2, Star, Ticket } from "lucide-react";

import PastEventStatCard from "@/components/atom/PastEventStatCard/PastEventStatCard";
import { numberWithCommas } from "@/lib/helpers/formatNumber";
import { EventType } from "@/lib/types";

const PastEventHighlights = ({ event }: { event: EventType }) => (
  <section className="space-y-4">
    <h2 className="font-semibold">Event highlights</h2>
    <div className="flex flex-col gap-4 sm:flex-row">
      <PastEventStatCard
        Icon={Ticket}
        value={
          event.ticketsSold === undefined
            ? "N/A"
            : numberWithCommas(event.ticketsSold)
        }
        label="Tickets sold"
      />
      <PastEventStatCard
        Icon={Star}
        value={
          event.crowdRating === undefined ? "N/A" : `${event.crowdRating}/5`
        }
        label="Crowd rating"
      />
      <PastEventStatCard
        Icon={Music2}
        value={event.expectedSongs ?? "N/A"}
        label="Expected songs"
      />
    </div>
  </section>
);

export default PastEventHighlights;
