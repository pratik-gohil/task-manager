import { useState } from "react";
import "./App.css";
import SearchInput from "./components/input";
import TaskList from "./components/TaskList";
import { Plus } from "lucide-react";

export interface ITask {
  title: string;
  description: string;
  status: "in-progress" | "completed" | "pending";
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [search, setSearch] = useState("");

  return (
    <main className="container flex justify-center items-center w-screen h-screen bg-secondary">
      <div className="bg-card shadow-md w-80 min-h-96 max-h-screen mx-auto p-4">
        <SearchInput
          defaultValue={search}
          onChange={(value) => setSearch(value)}
        />

        <div className="my-4">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </main>
  );
}

export default App;
