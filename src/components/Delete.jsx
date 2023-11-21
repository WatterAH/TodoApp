import { Tooltip, IconButton } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Edit({ id, tareas, setTareas }) {
  return (
    <Tooltip content="Delete task">
      <IconButton
        variant="text"
        color="red"
        onClick={() => {
          const new_tareas = tareas.filter((tarea) => {
            return tarea.id != id;
          });
          setTareas(new_tareas);
        }}
      >
        <TrashIcon className="h-4 w-4" />
      </IconButton>
    </Tooltip>
  );
}
