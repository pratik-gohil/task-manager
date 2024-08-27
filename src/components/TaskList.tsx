import { ITask, TTaskStatus } from "@/App";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCallback } from "react";

interface ITaskList {
  tasks: ITask[];
}

function TaskList({ tasks }: ITaskList) {
  const filterTasks = useCallback(
    (status: TTaskStatus) => {
      return tasks.filter((task) => task.status === status);
    },
    [tasks]
  );

  const inProgressTasks = filterTasks("in-progress");
  const pendingTasks = filterTasks("pending");
  const completedTasks = filterTasks("completed");

  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem className="border-none mb-4" value="in-progress">
        <AccordionTrigger className="flex justify-between px-4 py-2 bg-muted rounded-md no-underline hover:no-underline">
          <span className="font-medium text-foreground">
            In Progress ({inProgressTasks.length})
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          {inProgressTasks.map((task) => (
            <div>{task.title}</div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-none mb-4" value="pending">
        <AccordionTrigger className="flex justify-between px-4 py-2 bg-muted rounded-md no-underline hover:no-underline">
          <span className="font-medium text-foreground">
            Pending ({pendingTasks.length})
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          {pendingTasks.map((task) => (
            <div>{task.title}</div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-none mb-4" value="completed">
        <AccordionTrigger className="flex justify-between px-4 py-2 bg-muted rounded-md no-underline hover:no-underline">
          <span className="font-medium text-foreground">
            Completed ({completedTasks.length})
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          {completedTasks.map((task) => (
            <div>{task.title}</div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default TaskList;
