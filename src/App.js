
//imports ....you don't need to import react in a functional component
// import React from 'react'
import "./App.css";
import { useState, useEffect } from "react";
import trash from "./trash.svg";

const App = () => {
  //hooks
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [edit, setEdit] = useState(null); //not needed
  // above was the hook for the editing button I couldn't get to work

  //stores list so does not delete when re-loaded- amazing!  You dont need to declare React at the beginning of hooks (only in class components), import them at the top instead
  useEffect(() => {
    const json = localStorage.getItem("tasks");
    const loadedTasks = JSON.parse(json);
    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);
  }, [tasks]);

  //update text when inputted
  const updateInputText = (event) => {
    setInputText(event.target.value);
  };

  //create list... changed each of the items to have seperate complete and text property
  const addTask = () => {
    const addList = [...tasks];
    addList.push({ text: inputText, complete: false });
    setTasks(addList);
  };

  //delete item from list
  const deleteTask = (index) => {
    const deleteList = [...tasks];
    deleteList.splice(index, 1);
    setTasks(deleteList);
  };

  //function to handle complete click event when target is checked
  const checkBox = (event, index) => {
    const complete = event.target.checked;
    const newTasks = tasks.slice();
    newTasks[index].complete = complete;
    setTasks(newTasks);
  };

  //what will display on webpage
  return (
    <div id="container">
      <h1 id="title">TO DO LIST</h1>
      <div id="formInput">
        <div id="additemcontainer">
          <input
            id="typehere"
            placeholder="Type here"
            onChange={updateInputText}
          />
          <button data-testis="addTest" id="add" onClick={addTask}>
            Add
          </button>
        </div>
        {tasks.map((item, index) => {
          console.log(item);
          return (
            // Added a onChange event to the input element,  added css for conditional rendering
            <div
              style={{
                textDecoration: item.complete ? "line-through" : "",
                color: item.complete ? "green" : "black",
              }}
              id="todolist"
            >
              <input
                onChange={(e) => checkBox(e, index)}
                value={item.complete}
                type="checkbox"
                defaultChecked={false}
              />

              <p id="box"> {item.text}</p>

              <button data-testid="deletetest" onClick={deleteTask}>
                <img id="trash" src={trash} alt="delete" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;



