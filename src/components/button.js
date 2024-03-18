export function Delete(props) {
  return (
    <button className="btn btn-sm btn-danger">
      <i className="bi bi-trash"></i>
    </button>
  );
}

export function Check(props) {
  return (
    <button className="btn btn-sm btn-success">
      <i className="bi bi-check-square"></i>
    </button>
  );
}

export function Add(props) {
  return <button className="btn btn-primary btn-sm rounded ms-2">Add</button>;
}
