import { ITask } from "@/App";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ITaskList {
  tasks: ITask[];
}

function TaskList({ tasks }: ITaskList) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem className="border-none" value="pending">
        <AccordionTrigger className="flex justify-between px-4 py-2 bg-muted rounded-md no-underline hover:no-underline">
          <span className="font-medium text-foreground">
            Pending ({tasks.length})
          </span>
        </AccordionTrigger>
        <AccordionContent>
          {tasks.map((task) => (
            <div>{task.title}</div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default TaskList;
