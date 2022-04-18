import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


// test('renders learn react link', () => {
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
// ;
//change linkElement

//TEST TO SEE IF PROGRAMME RENDERS

 it ('renders without crashing', () =>{
     const div = createElement('div');
     ReactDOM.render(<button></button>, div)
 })

 //TESTING BUTTON ADDS TASKS
 test ('fireEvent on submit button', () => {
     render(<App/>)
     const submitButton = screen.getbyText(/addTask/) //if notwork try addTask
     fireEvent.click(submitButton)
 })

//TESTING CHECK BUTTON 
test ('fireEvent on submit button', () => {
    render (<App/>)
    const submitButton = screen.getbyText('checktest') //if notwork try addTask
    fireEvent.click(submitButton)
    fireEvent.click(submitButton)
})

//TESTING DELETE BUTTON 
 test ('fireEvent on submit button', () => {
     render (<App/>)
     const submitButton = screen.getbyText('addTest') //if notwork try addTask
     fireEvent.click(submitButton)
     fireEvent.click(submitButton)
     const deleteButton = screen.GetAllByText('deletetest') //if notwork try deleteTask
     expect(deleteButton.length).toBe(3)
 })

 //Can't seem to wrap my head around testing at all, each of these tests i get the error 'blank is not defined'