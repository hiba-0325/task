import React, { useState, useContext } from "react";
import "./TaskApp.css";

import { ThemeContext } from "./SwitcherContex";

function TaskApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="container">
        <h1>To-Do-List App </h1>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Addtask"
          className="input-box"
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id} className="task-item">
              {t.text}
          
              <button className="delete-btn" onClick={() => deleteTask(t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskApp;
