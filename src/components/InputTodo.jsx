import { useState } from "react";

export default function InputTodo(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keycode === 1) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <>
      <div className="InputContainer">
        <h1 className="Heading">Todo App</h1>
        <input
          type="text"
          className="InputBox"
          placeholder="Enter your todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
        />
        <button
          className="AddTask"
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
