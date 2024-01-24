export default function TodoList(props) {
  return (
    <>
      <li className="ListItem">
        {props.item}
        <span className="Icon">
          <i
            className="fa-solid fa-trash"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </>
  );
}
