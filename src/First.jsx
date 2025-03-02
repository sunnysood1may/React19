import { userKey } from "./NavBar";

function First(){
    const firstExp = "First Example";
    const userObj = {
        name: "sunny sood",
        email: "sunny@test.com",
        age: 39
    }
    const userArray = ['sunny','shilpa','shobhit'];
    let path = "https://www.pinpng.com/pngs/m/444-4442053_maersk-group-logo-maersk-line-hd-png-download.png";
    let x = 20; let y =30;
    function abc(){
        return "ABCDE"
    }
    function sumnumber(a,b){
        return a+b;
    }
    function operation(a,b,op){
        if(op == "+"){
            return a+b;
        } else if(op == "-"){
            return a-b;
        } else {
            return a+b;
        }
    }
    const fruit=(val)=>{
        alert(val);
    }
    return (
        <div>
            ABC: {abc()} <br />
            Sum number: {sumnumber(10,20)}  <br />
            First: {firstExp?firstExp:"User not found!"}  <br />
            <Fruit />
            {10+20+30}  <br />
            {x+y}<br /> 
            Sum: {sum()}    <br />
            Operation: {operation(10,14,"+")} <br />
            UserKey: {userKey}  <br />
            Age: { userObj.age }<br />
            Array: {userArray[1]} <br />
            <img width='100' src={path} /><br />
            <input type="text" value={firstExp} /><br /> <br />
            <button onClick={()=>alert("hello")}>Click</button>&nbsp;&nbsp;
            <button onClick={()=>fruit("apple")}>Apple</button>&nbsp;&nbsp;
            <button onClick={()=>fruit("banana")}>Banana</button>
        </div>
    )
}

function Fruit(){
    return (
        <h1>Apple</h1>
    )
}
function sum(){
    return 10+10
}

export default First;