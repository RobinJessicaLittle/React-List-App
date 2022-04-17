
    //imports
import React from 'react'
import './App.css';
import {useState} from 'react';
import trash from './trash.svg';



const App = () => {
        //hooks
    const [tasks, setTasks] = useState([''])
    const [inputText, setInputText] = useState ('')
    // // const [inputTextEditing, setInputTextoEditing] = React.useState(null);
    // above was the hook for the editing button I couldn't get to work

        //stores list so does not delete when re-loaded
        React.useEffect(() => {
            const json = localStorage.getItem("tasks");
            const loadedTasks = JSON.parse(json);
            if (loadedTasks) {
              setTasks(loadedTasks);
            }
          }, []);
        
          React.useEffect(() => {
            const json = JSON.stringify(tasks);
            localStorage.setItem("tasks", json);
          }, [tasks]);

    //update text when inputted
    const updateInputText = (event) => {
    setInputText(event.target.value)
    }

//create list
const addTask = () => {
    const addList = [...tasks]
    addList.push(inputText)
    setTasks(addList)
  }

//edit list
// This bit seems to work okay but it's the return that's dodgy
// const editTask = () =>{
//     const updatedTasks = [...tasks].map((tasks) => {
//       if (tasks === tasks) {
//         tasks.text = setInputText;
//       }
//       return tasks;
//     });
//     setTasks(updatedTasks);
//     setInputTextoEditing(null);
//   }

//delete item from list
  const deleteTask = (index) => {
    const deleteList = [...tasks]
    deleteList.splice(index, 1)
    setTasks(deleteList)
  }
//what will display on webpage
  return (
    <div id="container">
      <h1 id="title">TO DO LIST</h1>
      <div id="formInput">
          <div id= 'additemcontainer'>
        <input id= 'typehere' placeholder="Type here" onChange={updateInputText}/>
        <button id= 'add' onClick={addTask}>Add</button>
        </div>
        {tasks.map((item, index) => {
          return (
            <div id = 'todolist'>

             <input type="checkbox" defaultChecked={false}/> 
             {/* style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> */}
                {/* Trying to put line through text when clicked */}



              <p id = 'box'> {item}</p>
                {/* attempting edit button, not sure why I couldn't get this to works
                {tasks.setInputTextoEditing === setInputTextoEditing ? (
                  <button onClick={() => editTask(tasks.setInputTextoEditing)}>
                    Re-Add
                  </button>
                ):(
                  <button onClick={() => setInputTextoEditing (tasks.setInputTextoEditing)}>Edit</button>
                )} */}

              <button onClick={deleteTask}>< img id = 'trash'src={trash} alt= 'delete'/></button>
              
            </div>
          )

        })}
      </div>
    </div>
  )
}
export default App



