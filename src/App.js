
import './App.css';
import * as React from 'react';
import {render} from 'react-dom';
import ToDoSpace from './components/ToDoSpace';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
let s = [];

if (localStorage.length === 0) {
 
  localStorage.setItem("ids", 0);

  localStorage.setItem("todo", JSON.stringify(s));
}
window.onload = (event) => {
  App();
};
function App() {
  let storedtodo = JSON.parse(localStorage.getItem("todo"));
  var v={ id: 1, task: "ddd",done:true };
  return (
    <div>
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <div className="componant">
      
      <AddTask />
      </div>
      <hr></hr>

      <div>
        <ToDoSpace displaytodo={storedtodo} />
      </div>

      <hr></hr>
      <Footer storedtodo={storedtodo}/>
    </div>
  );
}
export default App;
