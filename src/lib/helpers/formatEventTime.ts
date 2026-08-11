const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC",
});

const formatTimeValue = (value: string) => {
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? value : timeFormatter.format(date);
};

export const formatEventTime = (
  time: string | null,
  endTime: string | null,
  formattedTime?: string | null,
) =>
  formattedTime ||
  [time, endTime]
    .filter((value): value is string => Boolean(value))
    .map(formatTimeValue)
    .join(" - ");
