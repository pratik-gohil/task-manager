import { cn } from "@/lib/utils";
import { TTaskStatus } from "@/types/task";

const getStatusColor = (status: TTaskStatus) => {
  switch (status) {
    case "in-progress":
      return "bg-yellow-500";
    case "completed":
      return "bg-green-500";
    case "pending":
      return "bg-red-500";
  }
};

interface IStatusChip {
  status: TTaskStatus;
  label: string;
}

function StatusChip({ status, label }: IStatusChip) {
  const color = getStatusColor(status);

  return (
    <div className="flex items-center">
      <span className={cn("mr-2 h-3 w-3 rounded-full", color)}></span>
      {label}
    </div>
  );
}

export default StatusChip;
