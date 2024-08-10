/* 
When render
1. state change
*/

import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(1); //[1, func]/ count=statevariable;
  // setCount=return function

  const increase = () => {
    setCount(count + 1); //state update/change
    console.log("Counter value:", count);
  };
  console.log("Rendered counter");
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Click</button>
    </div>
  );
}
