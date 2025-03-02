import { useState } from "react";

function State(){
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana");
    }
    return (
        <>
            <h1>State in React</h1>
            <h2>{fruit}</h2>
            <button onClick={handleFruit}>Change Fruit Name</button>
        </>
    )
}

export default State;