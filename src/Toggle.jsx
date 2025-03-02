import { useState } from "react";
import User from './User';

function Toggle(){
    const [display, setDisplay] = useState(true);
    const [count, setCount] = useState(0);
    let userObj = {
        userName: "Shilpa",
        userEmail: "shilpa@test.com",
        userAge: "36"
    }
    return (
        <>
            <h1>Toogle in React</h1>
            {
                display ? <h4>Sunny</h4> 
                : 
                <User userObj={userObj} />
            }
            <button onClick={()=>setDisplay(!display)}>Toggle</button>

            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Counter</button>
            {
                count==0?<h2>Condition 0</h2>
                :count==1?<h2>Condition 1</h2>
                :count==2?<h2>Condition 2</h2>
                :count==3?<h2>Condition 3</h2>
                :count==4?<h2>Condition 3</h2>
                :<h2>Other condition</h2>
            }
        </>
    )
}

export default Toggle;