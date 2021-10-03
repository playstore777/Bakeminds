import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    const increaseCount = () => {
        let updatedCount = count + 1;
        setCount(updatedCount);
    };

    const decreaseCount = () => {
        let updatedCount = count - 1;
        if (updatedCount >= 0) setCount(updatedCount);
    };

    const resetCount = () => setCount(0);

    // const resetCount = () => {
    //     setCount(0);
    //     setCount(count + 1); // if count was 3 then it will change to 4, but not to 1, because it is async.
    // };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increaseCount}>Add</button>
            <button onClick={decreaseCount}>Remove</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default Counter;
