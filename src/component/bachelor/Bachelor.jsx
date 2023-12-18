import React, { useContext, useEffect } from 'react'
import './bach.css'
import {  toast } from 'react-toastify';
import { useState } from 'react';
import { AppContext } from '../../App';

const Bachelor = () => {
const {login,setLogin,setLoader,route}=useContext(AppContext)
const [cv,setCv]=useState({})
const [cvDone,setCvDone]=useState(false)
const [high,setHigh]=useState({})
const [highDone,setHighDone]=useState(false)
const [personal,setPersonal]=useState({})
const [personalDone,setPersonalDone]=useState(false)
const [passport,setPassport]=useState({})
const [passportDone,setPassportDone]=useState(false)
const [statement,setStatement]=useState({})
const [statementDone,setStatementDone]=useState(false)
const [country,setCountry]=useState("")
const [require,setRequire]=useState("")


const handleCvChange = (event) => {
    const file = event.target.files[0];
    setCv(file);
setCvDone(true)
   
}
const handleHighChange = (event) => {
    const file = event.target.files[0];
    setHigh(file);
setHighDone(true)
   
}
const handlePersonal = (event) => {
    const file = event.target.files[0];
    setPersonal(file);
setPersonalDone(true)
   
}
const handlePassport = (event) => {
    const file = event.target.files[0];
    setPassport(file);
setPassportDone(true)
   
}
const handlestatement = (event) => {
    const file = event.target.files[0];
    setStatement(file);
setStatementDone(true)
   
}
const handleCountry =(e)=>{
setCountry(e.target.innerHTML)
}

const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true)
    if(sessionStorage.getItem("token")){
        const formData = new FormData();
       formData.append("CV",cv)
       formData.append("HighSchoolCertificate",high)
       formData.append("PersonalPicture",personal)
       formData.append("Passport",passport)
       formData.append("PersonalStatement",statement)
       formData.append("CountryOfStudy",country)
       formData.append("RequiredSpecialization",require)
        try {
          const response = await fetch(`${route}/bechlor`, {
            method: 'POST',
            body: formData,
            headers:{
              "Authorization" :`Bearer ${sessionStorage.getItem("token")}`
            }
          })
          .then(res=>res.json());
          console.log(response)
          setLoader(false)
          if (response.message=="Request sent successfully") {
      toast.success("Request sent successfully")
          }
           else if(response.status=="fail"){
          toast.error(response.message)
          }
    }
    catch (error) {
        console.error(error);
    }
}
else{
    toast.error("you should login first")
}
}

useEffect(()=>{     
    if(sessionStorage.getItem("token")){
        setLogin(true)
  
      }
    else{
        toast.error("you should login first")
    } 
console.log(login)
},[])
    
  return (
  <div className="bachelor">
    <div className="container">
        <h2>Apply to Bachelor</h2>
<form action="" onSubmit={handleSubmit}>
<div class="dropdown" tabindex="0">
  <div class="dropdown-btn" aria-haspopup="menu">
    <span>Country Of Study</span>
    <span class="arrow"></span>
  </div>
  <ul class="dropdown-content" role="menu">
    <li> <div onClick={handleCountry} className={country === "UK" ?"active" : ""} >UK</div></li>
    <li> <div onClick={handleCountry} className={country === "Malysia" ?"active" : ""}>Malysia</div></li>
    <li><div onClick={handleCountry} className={country === "Germany" ?"active" : ""}>Germany</div></li>
  </ul>
</div>
<div className="require">
    riquire specialization
    
    <textarea onChange={(e)=>setRequire(e.target.value)} cols="35" rows="5" placeholder='write here'></textarea>
</div>
        <label   className={cvDone ?"custum-file-upload done " : "custum-file-upload  "} >
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload CV</span>
   </div>
   <span>{cv.name}</span>
   <input onChange={handleCvChange} accept="application/pdf"  type="file" />
</label>

<label  className={highDone ?"custum-file-upload done " : "custum-file-upload  "}>
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Upload High School Certification </span>
   </div>
   <span>{high.name} </span>
   <input  type="file" accept="application/pdf" onChange={handleHighChange} />
</label>
<label className={personalDone ?"custum-file-upload done " : "custum-file-upload  "}>
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload Personal Picture</span>
   </div>
   <span>{personal.name}</span>
   <input  accept="application/pdf" type="file" onChange={handlePersonal} />
</label>
<label className={passportDone ?"custum-file-upload done " : "custum-file-upload  "}>
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Click to upload Passport</span>
   </div>
   <span>{passport.name}</span>
   <input accept="application/pdf" onChange={handlePassport}  type="file" />
</label>
<label className={statementDone ?"custum-file-upload done " : "custum-file-upload  "}>
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Upload Personal Statement (word file)</span>
   </div>
   <span>{statement.name}</span>
   <input   name="wordFile" accept=".doc, .docx" type="file" onChange={handlestatement} />
</label>

<button class="btn-31" type='submit'>
  <span class="text-container">
    <span class="text">Apply</span>
  </span>
</button>



        </form>
 
    </div>
  </div>
  )
}

export default Bachelor