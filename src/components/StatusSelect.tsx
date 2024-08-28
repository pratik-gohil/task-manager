import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import StatusChip from "./StatusChip";
import { TTaskStatus } from "@/types/task";

const statuses: IStatusSelect[] = [
  {
    value: "in-progress",
    label: "In Progress",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "pending",
    label: "Pending",
  },
];

interface IStatusSelect {
  value: TTaskStatus;
  label: string;
}

export default function SelectStatus() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<IStatusSelect>();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <div className="w-fit">
            {status ? (
              <StatusChip status={status.value} label={status.label} />
            ) : (
              "Select status..."
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="p-2 w-[var(--radix-popover-trigger-width)]"
      >
        {statuses.map((status) => (
          <div
            key={status.value}
            onClick={() => setStatus(status)}
            className="hover:bg-secondary p-2 cursor-pointer"
          >
            <StatusChip status={status.value} label={status.label} />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
