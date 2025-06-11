import "./App.css";
import React from 'react'
import { useState } from "react";
import { memo } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      title: "Buy groceries",
      description: "Milk, Bread, Eggs, Fruits",
      done: false,
    },
    {
      title: "Workout",
      description: "45 minutes of cardio and strength training",
      done: true,
    },
    {
      title: "Read a book",
      description: "Finish reading 'Atomic Habits' chapter 5",
      done: false,
    }
  ]);

  function addTodoList() {
    setTodo([...todo,{
      title: "Walk 7,000 steps",
      description: "Finish this all steps",
      done: true,
    }])
    console.log("todo is created!")
  }
  return (
    <div className="ml-4 mr-4  bg-gray-100 ">
      <MainPage/>
      <button className="border-1 pl-4 pr-4 mt-5" onClick={addTodoList}>Add todo</button>
      {/* passing props into Component */}
      { todo.map((item,index) => <Todo id={index} title={item.title} description={item.description} />)}
    </div>
  );
}

// React.Memo -
// Wrapping the component with React.memo helps optimize performance by preventing 
// unnecessary re-renders when props haven't changed
// React.memo is a higher-order component (HOC) used for optimizing functional components in React applications. 
// It prevents unnecessary re-renders by memoizing the component, which means it caches the rendered output and 
// only re-renders if the props have changed. This is particularly useful for components that receive
//  the same props frequently but don't need to update unless those props change. 
const MainPage = React.memo(function MainPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Main Page</h1>
      <button className="bg-gray-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
});

const Todo = (props) => {

  // object destructuring
  const {title,description} = props;
  return(
    <div className="border-1 mt-2 p-2">
      <p>{props.id}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
};

export default App;
