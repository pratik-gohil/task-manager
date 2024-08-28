import SelectStatus from "@/components/StatusSelect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

function EditTodo() {
  return (
    <>
      <Input placeholder="Enter the title" className="mt-4" />
      <Textarea placeholder="Enter the description" className="mt-4" />

      <div className="mt-4">
        <SelectStatus />
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/">
          <button className="border border-primary bg-background text-primary px-8 py-2 rounded-md min-w-28">
            Cancel
          </button>
        </Link>
        <button className="border border-background bg-primary text-background px-8 py-2 rounded-md min-w-28">
          Edit
        </button>
      </div>
    </>
  );
}

export default EditTodo;
