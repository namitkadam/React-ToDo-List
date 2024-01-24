import { useState } from "react";

import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

import "./App.css";

// function App() {
//   // const [inputVal, setInputVal] = useState("");
//   let inputVal = useRef();
//   // function sent(e) {
//   //   // setInputVal(e.target.value);
//   // }
//   function btn() {
//     const xyz = inputVal.current.value;
//     console.log("input", xyz);
//   }
//   return (
//     <div className="TodoContainer">
//       <div className="InputContainer">
//         <h1>ToDo App</h1>
//         <div className="Input">
//           <input
//             placeholder="kak"
//             className="InputTask"
//             // onChange={sent}
//             // value={inputVal}
//             ref={inputVal}
//           />
//           <button className="BtnSubmit" onClick={btn}>
//             Add Task
//           </button>
//         </div>
//         <div>
//           <li className="List">{inputVal.current.value}</li>
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  const [inputList, setInputTodoList] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setInputTodoList([...inputList, inputText]);
    }
  };

  function deleteListItem(key) {
    let newListTodo = [...inputList];
    newListTodo.splice(key, 1);
    setInputTodoList([...newListTodo]);
  }

  return (
    <div className="TodoContainer">
      <div className="TodoWrapper">
        <InputTodo addList={addList} />
        <h1 className="HeadingTitle">ToDo</h1>
        {inputList.map((listItem, ind) => {
          return (
            <TodoList
              key={ind}
              index={ind}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
