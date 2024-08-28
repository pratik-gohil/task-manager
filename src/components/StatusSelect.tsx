import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const statuses = [
  {
    value: "in-progress",
    label: "In Progress",
    color: "bg-yellow-500",
  },
  {
    value: "completed",
    label: "Completed",
    color: "bg-green-500",
  },
  {
    value: "pending",
    label: "Pending",
    color: "bg-red-500",
  },
];

export default function SelectStatus() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<{
    value: string;
    label: string;
    color: string;
  }>();

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
              <>
                <span
                  className={cn(
                    "h-3 w-3 rounded-full inline-block mr-2",
                    status.color
                  )}
                />
                {
                  statuses.find((status) => status.value === status.value)
                    ?.label
                }
              </>
            ) : (
              "Select status..."
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        {statuses.map((status) => (
          <div
            key={status.value}
            onClick={() => setStatus(status)}
            className="hover:bg-secondary p-2 cursor-pointer"
          >
            <div className="flex items-center">
              <span
                className={cn("mr-2 h-3 w-3 rounded-full", status.color)}
              ></span>
              {status.label}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
