import Add_task from "./add_task";
import Button from "./button";
import Task_list from "./task_list";
import { useState } from "react";

export default function Form(props) {
  const { todos, setTodos } = props;
  const [value, setValue] = useState("");
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <div className="mt-4">
          <form
            className="d-flex justify-content-between align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
              setTodos([...todos, { id: Math.random(), name: value }]);
            }}
          >
            <Add_task
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Button label="Add" />
          </form>
        </div>
      </div>
    </div>
  );
}
