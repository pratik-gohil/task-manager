import SelectStatus from "@/components/StatusSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ITask, TTaskStatus } from "@/types/task";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTodo() {
  const params = useParams();
  const [tasks, setTasks] = useLocalStorage<ITask[]>("tasks", []);
  const id = params.taskId;
  const task = tasks.find((task) => task.id === id);
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState<TTaskStatus>(task?.status || "pending");
  const navigate = useNavigate();

  const handleEdit = () => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, title, description, status } : task
      )
    );

    setTimeout(() => navigate("/"), 0);
  };

  return (
    <>
      <Input
        placeholder="Enter the title"
        className="mt-4"
        defaultValue={task?.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Enter the description"
        className="mt-4"
        defaultValue={task?.description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="mt-4">
        <SelectStatus status={status} setStatus={setStatus} />
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/">
          <button className="border border-primary bg-background text-primary px-8 py-2 rounded-md min-w-28">
            Cancel
          </button>
        </Link>
        <button
          onClick={handleEdit}
          className="border border-background bg-primary text-background px-8 py-2 rounded-md min-w-28"
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default EditTodo;
