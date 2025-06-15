import React, { useState } from "react";

/* problem why need state variable in react.js" 
// local vairable ISSUE -

function App(){
  let count = 0;
  const incrementButtonClick = () =>{
    count = count + 1;
  }
  return(
    <div className="flex justify-center items-center flex-col mt-4 font-bold">
      <h1 className="border-2 p-9">counter:({count})</h1>
      <button onClick={incrementButtonClick} className="rounded-lg px-4 py-2 m-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">increment button</button>
    </div>
  )
}

export default App;

*/

// every time count increment value by 1.
// render whole app component - diff algorithm (running).
// to avoid too much rendering your app, we have to think context_API.
// React provides the Context API to manage global state that needs to be accessed by multiple components.
// It allows the sharing of state across the component tree without having to pass props manually through each level.
// Recoil is a state management library developed by Facebook specifically for React applications.
// It introduces the concept of atoms and selectors, providing a more flexible and scalable approach to managing and sharing state.

function App(){
  const [count,setCount] = useState(0);

  console.log(count); // current_value
  console.log(setCount); // function_behide the since written by facebook developer.

  const incrementButtonClick = () =>{
    setCount(count+1);
  }
  return(
    <div className="flex justify-center items-center flex-col mt-4 font-bold">
      <h1 className="border-2 p-9">counter:({count})</h1>
      <button onClick={incrementButtonClick} className="rounded-lg px-4 py-2 m-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">increment button</button>
    </div>
  )
}

export default App;