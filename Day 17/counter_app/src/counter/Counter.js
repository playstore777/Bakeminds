import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    const increaseCount = () => setCount(count++);

    const decreaseCount = () => setCount(count--);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increaseCount}>Add</button>
            <button onClick={decreaseCount}>Remove</button>
        </div>
    );
};

export default Counter;
