import React, { useState } from "react";
// import CreateTask from "../modals/CreateTask";
// import Card from "./Card";

import { AddTodos, ListTodos } from "../components";

export default function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-1" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        <ListTodos />
      </div>
      <AddTodos toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
}
