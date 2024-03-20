import { useState } from "react";

export default function Task(props) {
  const [checked, setCheck] = useState(false);
  const { onDelete, id, name } = props;
  function checkEm(e) {
    setCheck(e.target.checked);
  }
  console.log(checkEm);
  return (
    <div className=" justify-content-between align-items-center mt-3">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" onChange={checkEm}></input>
          <span className="ms-2">{name}</span>
        </div>

        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => {
              onDelete(id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
