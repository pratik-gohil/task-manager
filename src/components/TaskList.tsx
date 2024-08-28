import { Accordion } from "@/components/ui/accordion";
import { ITask, TTaskStatus } from "@/types/task";
import { useCallback } from "react";
import TaskItem from "./Task";

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
      <TaskItem
        identifier="in-progress"
        title="In Progress"
        tasks={inProgressTasks}
      />
      <TaskItem identifier="pending" title="Pending" tasks={pendingTasks} />
      <TaskItem
        identifier="completed"
        title="Completed"
        tasks={completedTasks}
      />
    </Accordion>
  );
}

export default TaskList;
