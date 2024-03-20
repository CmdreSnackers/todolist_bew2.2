import Task from "./task";
import { useState } from "react";

export default function Task_list(props) {
  const { todos, setTodos } = props;
  return (
    <ul className="list-group">
      {todos.map((task, index) => {
        const { name, text, id } = task;
        return (
          <Task
            key={id}
            name={name}
            id={id}
            text={text}
            num={index + 1}
            onDelete={(id) => {
              setTodos(todos.filter((v) => v.id !== id));
            }}
          />
        );
      })}
    </ul>
  );
}
