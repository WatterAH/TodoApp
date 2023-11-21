import { Checkbox } from "@material-tailwind/react";

export default function Check({ id, tareas, setTareas }) {
  return (
    <Checkbox
      onClick={() => {
        tareas.map((tarea) => {
          if (tarea.id == id) {
            tarea.status = !tarea.status;
          }
        });
        setTareas(
          tareas.filter((tarea) => {
            return tarea.id != "si";
          })
        );
      }}
    ></Checkbox>
  );
}
