import React,{useState} from "react";
const App=()=>{
  let [username,SetUsername]=useState("PRIYANKA")
  let [count,setCount]=useState(0)

  let handlename=()=>{
    SetUsername("PRIYA")
  }

  let handlecount=()=>{
    setCount(1)
  }

  return(
    <>
    <h1>{username}</h1>
    <h2>{count}</h2>
    <button onClick={handlename}> Change Name</button>
    <button onClick={handlecount}>Change Number</button>
    </>
  )
}
export default App