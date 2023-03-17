import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App=()=>{
  let handlesubmit=()=>{
    toast.success("logged in successfully",{
      position:toast.POSITION.TOP_LEFT,
    })
  }
  return(
    <div>
      <ToastContainer/>
      <button onClick={handlesubmit}>click for message</button>
    </div>
  )
}
export default App