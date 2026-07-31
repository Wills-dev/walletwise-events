const DATE_OVERRIDE_EVENT_ID = "63b36981-b5b5-4b41-8b4f-c99f811b4b39";

export const formatEventDate = (eventId: string, formattedDate: string) =>
  eventId === DATE_OVERRIDE_EVENT_ID
    ? "Friday, 31 July 2026"
    : formattedDate;
