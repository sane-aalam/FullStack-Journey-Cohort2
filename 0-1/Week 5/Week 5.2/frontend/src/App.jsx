
import './App.css'
import CreateTodo from '../Components/CreateTodo'
import Todos from '../Components/Todos'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
   const [todo,setTodo] = useState({
	"title":"You can win (book read)",
    "description": "day 01 of book reading, reading 6 pages daily based",
    "completed":true
    });

    useEffect(() =>{
    console.log("useEffect is called!")
    TodoDataFetechCalled();
  },[])

   const TodoDataFetechCalled = async () =>{
      const url =
       "http://localhost:5000/todos";
    const response = await fetch(url);
    const jsonData = await response.json();

    console.log(jsonData)
    setTodo(jsonData);
  }

  return(
    <div>
      <Todos todos={todo}/>
      <CreateTodo/>
    </div>
  )
}

export default App
