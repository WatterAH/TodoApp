import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function AddTask({ setTarea, handleClick, tarea }) {
  return (
    <div className="flex max-w-xs mx-auto md:mx-0">
      <div>
        <Input
          label="New task..."
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
          className=""
        ></Input>
      </div>
      <div className="md:ml-3">
        <Button onClick={handleClick} className="ml-3 md:ml-0">
          Add
        </Button>
      </div>
    </div>
  );
}
