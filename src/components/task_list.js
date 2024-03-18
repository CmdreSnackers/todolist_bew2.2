import Task from "./task";

export default function Task_list() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ];
  return (
    <ul className="list-group">
      {todos.map((task, index) => {
        const { text, id } = task;
        return <Task key={id} text={text} />;
      })}
    </ul>
  );
}
