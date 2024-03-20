import Form from "./form";
import { useState } from "react";
import Task_list from "./task_list";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <div className="container">
        <div
          className="card rounded shadow-sm"
          style={{ maxWidth: "500px", margin: "60px auto" }}
        >
          <div className="card-body">
            <Task_list todos={todos} setTodos={setTodos} />
          </div>
        </div>

        <Form todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
