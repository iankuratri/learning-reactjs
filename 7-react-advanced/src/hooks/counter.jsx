import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times!`;

    return () => {
      console.log("cleanup code here");
    };
  }, [name, count]);

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
