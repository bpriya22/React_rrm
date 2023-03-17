import React,{useState} from "react";

const App=()=>{
  let [count,setcout]=useState(0)

let handleincri=()=>{
  setcout(count+1)
}
let handledec=()=>{
    setcout(count-1)
}
let hreset=()=>{
    setcout(0)
}

  return(
    <>
    <h1>{count}</h1>
    <button onClick={handleincri}>+</button>
    <button onClick={handledec}>-</button>
    <button onClick={hreset}>RESET</button>
    </>
  )
}
export default App