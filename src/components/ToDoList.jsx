import { Card, Checkbox, Typography } from "@material-tailwind/react";
import Edit from "./Edit";
import Delete from "./Delete";
import Check from "./Check";

export default function ToDoList({ TABLE_ROWS, setTareas }) {
  const TABLE_HEAD = ["Check", "Task", "Options"];

  return (
    <Card className="h-full w-full lg:w-1/2 mx-auto overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ id, task, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Check
                      id={id}
                      tareas={TABLE_ROWS}
                      setTareas={setTareas}
                    ></Check>
                  </Typography>
                </td>
                <td className={`${classes} ${status ? "line-through" : ""}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {task}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-kufam flex"
                  >
                    <div>
                      <Edit
                        id={id}
                        tareas={TABLE_ROWS}
                        tarea={task}
                        setTareas={setTareas}
                      ></Edit>
                    </div>

                    <Delete
                      id={id}
                      tareas={TABLE_ROWS}
                      setTareas={setTareas}
                    ></Delete>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
