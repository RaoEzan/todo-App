import React from 'react'
import { useState }  from "react";
// import './App.css';


// const { useState } = require("react");


function App(){
  const [title,setTitle]= useState('');
  const [description,setDescription]=useState('');
  const [todo,setTodo]=useState([])


const addtodo=(event)=>{
  event.preventDefault();
  console.log(title);
  console.log(description);
  setTodo([...todo,{title,description,id:Date.now()

  }])
  console.log("New todo",todo);
  
  setTitle('')
  setDescription('')
}

const deleteTodo=(index)=>{
  todo.splice(index,1)
  setTodo([...todo])
}

const edittodo=(index)=>{
  

  const U_value=prompt("Enter Update Val");
  if(U_value===""){
    alert("update value is empty")
    return
  }
  todo[index].title=U_value
  setTodo([...todo]);
}

return(
<>
<div className='app'>
<h1>📋 ToDo_App</h1>
<form onSubmit={addtodo}>
  <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder="Title" />
  <br /><br />
  <input onChange={(e)=> setDescription(e.target.value)} value={description} type="text" placeholder="Description" />
  <br /><br />
  <button className='todo'>Add Todo</button>
</form>
<div className='iner'>
        {todo.length > 0 ? todo.map((item, index) => {
          return <div className='style' style={{
            margin: '15px',
            padding: '20px',
            border: '1px solid black',
            borderRadius: '15px'
            
          }} key={item.id}>
            <p className='p'> {item.title}</p>
            <p className='de'>{item.description}</p>
            <button className="d"onClick={() => deleteTodo(index)}>🗑️</button>
            <button className="e" onClick={() => edittodo(index)}>✏️</button>
          </div>
          }) : 
          <h1>No todo Found.</h1>}
      </div>
          </div>
</>
)
}

export default App

// import React, { useState } from 'react';
// // import './App.css';

// function App() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [todo, setTodo] = useState([]);
//   // const [editIndex, setEditIndex] = useState(null);
//   // const [editTitle, setEditTitle] = useState('');
//   // const [editDescription, setEditDescription] = useState('');

//   const addtodo = (event) => {
//     event.preventDefault();
//     setTodo([...todo, { title, description, id: Date.now() }]);
//     setTitle('');
//     setDescription('');
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = [...todo];
//     updatedTodos.splice(index, 1);
//     setTodo(updatedTodos);
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setEditTitle(todo[index].title);
//     setEditDescription(todo[index].description);
//   };

//   const saveEdit = (index) => {
//     if (editTitle.trim() === '' || editDescription.trim() === '') {
//       alert('Updated value cannot be empty');
//       return;
//     }
//     const updatedTodos = [...todo];
//     updatedTodos[index].title = editTitle;
//     updatedTodos[index].description = editDescription;
//     setTodo(updatedTodos);
//     setEditIndex(null);
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">ToDo App</h1>
//       <form onSubmit={addtodo} className="todo-form">
//         <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" className="input-field" />
//         <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description" className="input-field" />
//         <button type="submit" className="add-button">Add Todo</button>
//       </form>

//       <div className="todo-list">
//         {todo.length > 0 ? todo.map((item, index) => (
//           <div key={item.id} className="todo-item">
//             {editIndex === index ? (
//               <>
//                 <input className="edit-input" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
//                 <input className="edit-input" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
//                 <button className="save-button" onClick={() => saveEdit(index)}>✔</button>
//               </>
//             ) : (
//               <>
//                 <p className="todo-title">{item.title}</p>
//                 <p className="todo-description">{item.description}</p>
//                 <button className="delete-button" onClick={() => deleteTodo(index)}>🗑</button>
//                 <button className="edit-button" onClick={() => startEdit(index)}>✏</button>
//               </>
//             )}
//           </div>
//         )) : <h1 className="no-todo">No todo Found.</h1>}
//       </div>
//     </div>
//   );
// }

// export default App;
