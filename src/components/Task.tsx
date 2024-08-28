import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ITask, TTaskStatus } from "@/types/task";
import StatusChip from "./StatusChip";
import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ITaskItem {
  tasks: ITask[];
  title: string;
  identifier: TTaskStatus;
}

function TaskItem({ tasks, title, identifier }: ITaskItem) {
  return (
    <AccordionItem className="border-none mb-4" value={identifier}>
      <AccordionTrigger className="flex justify-between px-4 py-2 bg-muted rounded-md no-underline hover:no-underline">
        <span className="font-medium text-foreground">
          {title} ({tasks.length})
        </span>
      </AccordionTrigger>
      <AccordionContent className="group pb-0 mt-2">
        {tasks.map((task) => (
          <div className="p-2 hover:bg-secondary" key={task.title}>
            <div className="">
              <div className="font-semibold text-primary inline-block h-8 w-8 bg-background border border-primary rounded-full text-center mr-2">
                <span className="align-middle inline-block leading-7">P</span>
              </div>
              <span className="text-primary font-bold align-middle inline-block leading-normal">
                {task.title}
              </span>
              <span className="font-medium align-middle inline-block leading-normal float-right">
                <StatusChip status={task.status} label={task.status} />
              </span>
            </div>
            <div className="ml-10 font-medium">{task.description}</div>
            <div className="ml-10 mt-2 text-muted-foreground">
              <span>{task.createdAt.toDateString()}</span>

              <div className="inline-flex gap-2 float-right group-hover:visible invisible">
                <Link to={`/edit/${task.id}`}>
                  <Edit2 size={20} className="text-primary cursor-pointer" />
                </Link>
                <Trash2
                  onClick={() => alert("delete")}
                  size={20}
                  className="text-destructive cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default TaskItem;
