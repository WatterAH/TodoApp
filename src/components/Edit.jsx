import {
  Tooltip,
  IconButton,
  Dialog,
  DialogHeader,
  Typography,
  DialogBody,
  Input,
  Button,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Edit({ id, tareas, tarea, setTareas }) {
  const [open, setOpen] = useState(false);
  const [newtarea, setNewTarea] = useState("");
  const handleClick = () => setOpen(!open);

  return (
    <div>
      <Tooltip content="Edit task">
        <IconButton variant="text" color="blue" onClick={handleClick}>
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} size="xs" handler={handleClick}>
        <div className="flex items-center justify-between">
          <DialogHeader>
            <PencilIcon className="sm:h-24 sm:w-24 h-10 w-10"></PencilIcon>
          </DialogHeader>
          <DialogBody>
            <div className="grid gap-6">
              <Input
                label="New task..."
                onChange={(e) => setNewTarea(e.target.value)}
              ></Input>
              <Button
                onClick={() => {
                  tareas.map((tarea) => {
                    if (tarea.id == id) {
                      tarea.task = newtarea;
                    }
                  });
                  setTareas(
                    tareas.filter((tarea) => {
                      return tarea.id != "si";
                    })
                  );
                  setOpen(!open);
                }}
              >
                Edit
              </Button>
            </div>
          </DialogBody>
        </div>
      </Dialog>
    </div>
  );
}
