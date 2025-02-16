import { useState } from "react";
import User from './User';

function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Home</h1>
      <h1>React19 Tutorial</h1>
      <h3>Counter Val : {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter Val
      </button>
      <User />
    </>
  );
}

export default Home;
