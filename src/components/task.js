import { Check, Delete } from "./button";
export default function Task(props) {
  return (
    <div className=" justify-content-between align-items-center mt-3">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <Check />
          <span className="ms-2">Task {props.num}</span>
        </div>
        <div>
          <Delete />
        </div>
      </li>
    </div>
  );
}
