import "./App.css";

import {useState} from 'react';

function App() {

  const [count,setCount]=useState(0)

  function incrementHandler(){
    setCount(count+1)
  }

  function decrementHandler(){
    setCount(count-1)
  }

  function resetHandler(){
    setCount(0)
  }
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col bg-[#344151] justify-center items-center gap-10 ">
      <div className="text-[#0398d4] text-2xl font-medium">Increment & Decrement</div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button className="text-center border-r-2 w-20 border-[#bfbfbf] text-5xl pb-1"  onClick={decrementHandler}>
          -
        </button>
        <div className="font-bold text-5xl gap-12">{count}</div>
        <button className="text-center border-l-2 w-20 border-[#bfbfbf] text-5xl pb-1" onClick={incrementHandler}>+</button>
      </div>
      <div>
        <button onClick={resetHandler} className="text-white py-2 px-5 bg-[#0398d4] rounded-sm text-lg">Reset</button>
      </div>
    </div>
  );
}

export default App;
