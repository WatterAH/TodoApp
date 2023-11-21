import React from "react";
import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";
import { useState } from "react";

export function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [cont, setCont] = useState(0);
  const handleClick = () => {
    if (tarea.length == 0) {
      return;
    }
    const data = {
      id: cont,
      task: tarea,
      status: false,
    };
    setTareas((state) => [...state, data]);
    setCont(cont + 1);
    setTarea("");
  };

  return (
    <div>
      <div className="md:flex mb-10 mt-8 md:mt-28 justify-center">
        <div className="font-kufam mr-0 md:mr-10 mb-5 ml-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            TODO List Application
          </h1>
          <p className="text-lg ml-2">Do it now.</p>
        </div>
        <AddTask
          setTarea={setTarea}
          handleClick={handleClick}
          tarea={tarea}
        ></AddTask>
      </div>
      <ToDoList TABLE_ROWS={tareas} setTareas={setTareas}></ToDoList>
    </div>
  );
}
