export default function Button(props) {
  //destructing to assign values
  const {
    color = "primary", // default
    label,
    onClick,
  } = props;
  return (
    //curly brackets to combine strings
    <button
      className={"btn btn-" + color + " btn-sm rounded ms-2"}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
