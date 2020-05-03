import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // custom reusable hook
  useDocumentTitle(`${name} has clicked ${count} times!`);

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
