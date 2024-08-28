import { useMemo, useState } from "react";
import SearchInput from "@/components/SearchInput";
import TaskList from "@/components/TaskList";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { ITask } from "@/types/task";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function Home() {
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);
  const [search, setSearch] = useState("");
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search]);

  return (
    <>
      <SearchInput
        defaultValue={search}
        onChange={(value) => setSearch(value)}
      />

      <div className="my-4">
        <TaskList tasks={filteredTasks} />
      </div>

      <Link to="/add">
        <button className="absolute bottom-4 right-4 bg-primary rounded-full text-background w-12 h-12">
          <Plus className="mx-auto" />
        </button>
      </Link>
    </>
  );
}

export default Home;
