import React from 'react'
import '../login/login.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const history =useNavigate()
const   {route ,setToken}=useContext(AppContext)
const   {loader,setLoader}=useContext(AppContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [userName,setUserName]=useState("")





  const handleLogin = async (event) => {
    event.preventDefault();
    setLoader(true)
  
  
   
    try {
      const response = await fetch(`${route}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({
            email:email,
            password:password,
            username:userName,
            passwordConfirm:confirmPassword
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      console.log(response)
      setLoader(false)
      if (response.token) {
        
        sessionStorage.setItem("token",response.token)
        history("/verify")
      }
      else if(response.errors){
toast.error(response.errors[0].msg)
      }
      else {
    toast.error("هناك خطأ")
    
      }
    } catch (error) {
      console.error(error);
    
    }
  };







  return (
    <div className="login">
       <div class="container">
    <div class="heading">Sign Up</div>
    <form action="" class="form" onSubmit={handleLogin}>
      <input required="" onChange={(e)=>setUserName(e.target.value)} class="input" name="email" id="email" placeholder="User Name"/>
      <input required="" onChange={(e)=>setEmail(e.target.value)} class="input" type="email"  name="email" id="email" placeholder="E-mail"/>
      <input required="" onChange={(e)=>setPassword(e.target.value)} class="input" type="password" name="password" id="password" placeholder="Password"/>
      <input required="" onChange={(e)=>setConfirmPassword(e.target.value)} class="input" type="password" name="password" id="password" placeholder="Password-Confirm"/>
      <input class="login-button" type="submit" value="Sign up"/>
    </form>
   
  </div>
    </div>
  )
}  

export default SignUp
