import React, { useState } from "react";

// Benefits of React
// - React uses a virtual DOM to optimize updates and improve performance. The virtual DOM is an in-memory representation of the actual DOM elements. It's a lightweight copy of the real DOM.
// - When you make changes to the state of a React component, React creates a new virtual DOM tree representing the updated state.
// - React then compares the new virtual DOM with the previous virtual DOM to determine the differences (diffing).
// - The differences are used to compute the most efficient way to update the real DOM.

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  // methods of increment & decrement value of counter-app
  const incrementValueHandler = () => {
    console.log("current_value", counterValue);
    setCounterValue(counterValue + 1);
    console.log("update_value", counterValue);
  }

  const decrementValueHandler = () => {
    console.log("current_value", counterValue);
    if(counterValue > 0){
        setCounterValue(counterValue-1)
    }
    console.log("update_value", counterValue);
  }

  return (
    <div>
      <h1 className="bg-gray-500 text-white text-2xl mt-5 mb-5">
        {" "}
        Counter : {counterValue}
      </h1>
      <button
        onClick={incrementValueHandler}
        className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all bg-gray-500 text-white hover:bg-slate-100 hover:text-gray-500"
      >
        increment Value
      </button>
      <button
        onClick={decrementValueHandler}
        className="rounded-md border border-transparent m-2 py-2 px-4 text-center text-sm transition-all bg-gray-500 text-white hover:bg-slate-100 hover:text-gray-500"
      >
        decrement Value
      </button>
    </div>
  );
}

export default Counter;

/*
function Counter(){
    // -⚠️ issue faced
    // - React treats "counterValue" as javascript variable, not state variable to update
    // - Not Able to update in UI level
    // - React uses a virtual DOM to optimize updates and improve performance
    var counterValue = 0;
    function incrementValueClickButton(){
        console.log("before the click button", counterValue);
        counterValue = counterValue + 1;
        console.log("after the click button", counterValue);
    }
    return(
       <div>
            <h1 className="text-blue-500"> Counter : {counterValue}</h1>
            <button onClick={incrementValueClickButton} className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all bg-gray-600 text-white hover:bg-slate-100 hover:text-gray-500">click button</button>
       </div>
    )
}

export default Counter;

*/
