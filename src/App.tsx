import { useState } from "react";
import "./App.css";
import SearchInput from "./components/input";
import TaskList from "./components/TaskList";
import { Plus } from "lucide-react";

export type TTaskStatus = "in-progress" | "completed" | "pending";

export interface ITask {
  title: string;
  description: string;
  status: TTaskStatus;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      title: "Task 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt optio sed harum iusto saepe ut quam laudantium nulla, soluta accusantium atque explicabo asperiores, doloribus, aspernatur quidem placeat reiciendis ad.",
      status: "completed",
    },
    {
      title: "Task 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt optio sed harum iusto saepe ut quam laudantium nulla, soluta accusantium atque explicabo asperiores, doloribus, aspernatur quidem placeat reiciendis ad.",
      status: "in-progress",
    },
    {
      title: "Task 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt optio sed harum iusto saepe ut quam laudantium nulla, soluta accusantium atque explicabo asperiores, doloribus, aspernatur quidem placeat reiciendis ad.",
      status: "pending",
    },
  ]);
  const [search, setSearch] = useState("");

  return (
    <main className="container flex justify-center items-center w-screen h-screen bg-secondary">
      <div className="relative bg-card shadow-md w-80 min-h-96 max-h-screen mx-auto p-4">
        <SearchInput
          defaultValue={search}
          onChange={(value) => setSearch(value)}
        />

        <div className="my-4">
          <TaskList tasks={tasks} />
        </div>

        <button className="absolute bottom-4 right-4 bg-primary rounded-full text-background w-12 h-12">
          <Plus className="mx-auto" />
        </button>
      </div>
    </main>
  );
}

export default App;
