import { useState } from "react";
import reading from "./assets/reading.svg";
import "./App.css";

function App() {
  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "eat lunch",
    "take time with me",
  ]);

  const newTodo = () => {
    if (addTask.trim() === "") {
      alert("Your must write to do task!!!");
      return;
    } else {
      setTasks((t) => [...t, addTask]);
      setAddTask("");
    }
  };

  const deleteTodo = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  };

  const handleInputChange = (e) => {
    setAddTask(e.target.value);
  };

  return (
    <>
      <div className="to-do-list">
        <h1 className="todo">
          To-Do List <img src={reading} alt="reading-icon" className="logo" />
        </h1>

        <div className="input">
          <input
            type="text"
            placeholder="add your task"
            className="input-todo"
            value={addTask}
            onChange={handleInputChange}
          />
          <button className="add-btn" onClick={newTodo}>
            ADD
          </button>
        </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="list-box">
                <input type="checkbox" />
                <span>{task}</span>
              </div>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
