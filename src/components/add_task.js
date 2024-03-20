export default function Add_task(props) {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Add new item..."
      required
      name="task_name"
      onChange={onChange}
    />
  );
}
