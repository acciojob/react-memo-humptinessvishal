import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(1000000000);

    return (
        <div id="incr-cnt">
            <h1>Count : {count}</h1>
            <button id="incr-btn" onClick={() => (setCount(count + 1))}>New Todo</button>
            <h1>Expensive calculation</h1>
            <h1 id="calc">{count}</h1>
        </div>
    )
}

export default Counter;