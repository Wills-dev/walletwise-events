import { LucideIcon } from "lucide-react";

const PastEventStatCard = ({
  Icon,
  value,
  label,
}: {
  Icon: LucideIcon;
  value: string | number;
  label: string;
}) => (
  <div className="min-w-52 flex-1 space-y-6 rounded-[16px] border border-[#E5E5E5] p-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F5F5]">
      <Icon aria-hidden="true" size={20} />
    </div>
    <div className="space-y-1">
      <p className="text-xl font-medium">{value}</p>
      <p className="text-xs text-[#737373]">{label}</p>
    </div>
  </div>
);

export default PastEventStatCard;
