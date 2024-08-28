import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ITask } from "@/types/task";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTodo() {
  const [_, setTasks] = useLocalStorage<ITask[]>("tasks", []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: Math.random().toString(36),
        title,
        description,
        status: "pending",
        createdAt: new Date(),
      },
    ]);

    setTimeout(() => navigate("/"), 0);
  };

  return (
    <>
      <Input
        placeholder="Enter the title"
        className="mt-4"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Enter the description"
        className="mt-4"
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex justify-between mt-8">
        <Link to="/">
          <button className="border border-primary bg-background text-primary px-8 py-2 rounded-md min-w-28">
            Cancel
          </button>
        </Link>
        <button
          onClick={handleAddTask}
          className="border border-background bg-primary text-background px-8 py-2 rounded-md min-w-28"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
