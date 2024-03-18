import Task from "./task";

export default function Task_list() {
  const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <ul className="list-group">
      {tasks.map((task, index) => {
        const { id } = task;
        return <Task key={id} num={index + 1} />;
      })}
    </ul>
  );
}
