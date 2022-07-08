import {useState} from "react";

function Counter2F() {

    let [counter, setCounter] = useState(0)

    const inc = e => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const dec = e => {
        setCounter(counter - 1)
        console.log(counter)
    }


  return <div>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </div>;
}

export default Counter2F