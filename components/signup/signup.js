import React, { useState } from 'react'
import {useNavigate,Link} from "react-router-dom"
import "./signup.css"

const Signup = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")
  const navigate=useNavigate()
  const register=()=>{
    if(!email || !password || !confirmpassword){
       return alert("please fill all the details")
    }
    fetch("http://localhost:5000/signup",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email,password,confirmpassword
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
        alert(data.error)
      }
      else{
        alert("Account created")
        navigate("/signin")
      }
    }) 
  }

  return (
    <>
    <div className="contan">
      <div className='signup'>
        <h1>Register</h1><br/>
        <input type="text" className="sign--input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/><br/>
        <input type="password" className="sign--input" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/><br/>
        <input type="password" className="sign--input" value={confirmpassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password"/><br/>
        <button className='signin--button' onClick={register}>Register</button>
        <Link to="/Signin" className='link' >Already have an Account? Sign In here</Link>

      </div>
      </div>
    </>
  )
}

export default Signup