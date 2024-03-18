import Add_task from "./add_task";
import Title from "./title";
import { Add } from "./button";
import Task_list from "./task_list";

export default function Form() {
  return (
    <div
      className="card rounded shadow-sm"
      style={{ maxWidth: "500px", margin: "60px auto" }}
    >
      <div className="card-body">
        <Title />
        <Task_list />
        <div className="mt-4">
          <form className="d-flex justify-content-between align-items-center">
            <Add_task />
            <Add />
          </form>
        </div>
      </div>
    </div>
  );
}
