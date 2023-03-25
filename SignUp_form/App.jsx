import React from 'react'
import Singnup from './Singnup';
import "./SignUp_form/default.css"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import Homepage from './Homepage';

const App = () => {
  const name= React.useRef()
  const email= React.useRef()
  const password= React.useRef()
  const [showhome,setshowhome]=React.useState(false)
  const localsignup=localStorage.getItem("signup")


React.useEffect(() => {
  if(localsignup)
     setshowhome(true)
  });


  const handleclick=()=>{
    
     if(name.current.value&&email.current.value&&password.current.value)
     {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("signup",email.current.value)
      toast.success("Account created successfully!")
     }
  }



  return (
    <div>
       <Singnup/>
       <ToastContainer/>
       
       <div className='container'>
        <div className='input_space'>
          <input ref={name} placeholder="Name" type="text" />
        </div>
        <div className='input_space'>
          <input ref={email} placeholder="Email" type="text" />
        </div>
        <div className='input_space'>
          <input ref={password} placeholder="Password" type="password" />
        </div>
        <button onClick={handleclick}>Sign Up</button>
       </div>
       
       
      
    </div>
   
  )
}

export default App