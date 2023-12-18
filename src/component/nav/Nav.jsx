import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import "./nav.css"
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import burger from '../../assets/burger.png'
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";



function Nav(props) {
  const history =useNavigate()
  const {route}=useContext(AppContext)
  const {login,setLogin}=useContext(AppContext)
  const [active ,setActive]=useState("")



  

const clickBurger =()=>{
  document.querySelector(".nav .list").classList.toggle("list-show")
}
const clickLink =()=>{
  document.querySelector(".nav .list").classList.remove("list-show")
}

const clickOnLink =(e)=>{
const elements = document.querySelectorAll(".nav .list a");
elements.forEach(element => {
  element.classList.remove("active");
});


setActive(e.target.innerHTML)
sessionStorage.setItem("active",e.target.innerHTML)
e.target.classList.add("active")

document.querySelector(".nav .list").classList.toggle("list-show")
}
const clickOnLinkSvg=(e)=>{
const elements = document.querySelectorAll(".nav .list a");
elements.forEach(element => {
  element.classList.remove("active");
  element.classList.remove("active-svg");
});


// setActive(e.target.innerHTML)
// sessionStorage.setItem("active",e.target.innerHTML)
e.target.classList.add("active-svg")

document.querySelector(".nav .list").classList.toggle("list-show")
}
const logOut =()=>{
  setLogin(false)
  sessionStorage.clear()
  clickOnLink()
  }
useEffect(()=>{
if(sessionStorage.getItem("active")){
  document.querySelectorAll(".nav .list a").forEach(element=>{
    if(element.innerHTML === sessionStorage.getItem("active")){
      element.classList.add("active")
    }
  })
}
},[])


  return (
    <div className="nav">
    <div className="container">
    <img  src={logo} alt="" />
      <div className="list">
        <Link onClick={clickOnLink} className='active' to="/">Home</Link>
        <Link onClick={clickOnLink} to="/who-us">Who Us</Link>
        <Link onClick={clickOnLink} to="/contact">Contact Us</Link>
        <Link onClick={clickOnLink} to="/apply">ِApply</Link>
        {login ?  <Link onClick={logOut} to="/login">Log Out</Link> : <Link onClick={clickOnLink} to="/login">Login</Link> }
        {login ? <Link onClick={clickOnLinkSvg} className='sv' to="/profile"><CgProfile/></Link> : null}
        {login ? <Link onClick={clickOnLinkSvg} className='sv' to="/notifications"><IoIosNotifications/></Link> : null}
       
      </div>
    
      <img onClick={clickBurger} src={burger} className='burger' alt="" />
        </div>
    </div>
  )
}

export default Nav