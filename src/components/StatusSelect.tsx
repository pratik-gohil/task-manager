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
import { statuses } from "@/constants/status";

export default function SelectStatus({
  status,
  setStatus,
}: {
  status: TTaskStatus;
  setStatus: React.Dispatch<React.SetStateAction<TTaskStatus>>;
}) {
  const [open, setOpen] = React.useState(false);

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
              <StatusChip status={status} label={statuses[status]} />
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
        {Object.entries(statuses).map(([key, value]: any) => (
          <div
            key={key}
            onClick={() => setStatus(key)}
            className="hover:bg-secondary p-2 cursor-pointer"
          >
            <StatusChip status={key} label={value} />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
