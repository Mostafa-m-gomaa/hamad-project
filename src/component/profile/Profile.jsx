import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const   {setLoader,setLogin,route}=useContext(AppContext)
    const [user,setUser]=useState({})
    const [requests,setRequests]=useState([])    

 
    useEffect(() => {
        fetch(`${route}/users/getMe`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.data);
                if (data.data.type === "Bachelor") {
                    fetch(`${route}/bechlor`, {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.data) {
                                setRequests(data.data);
                            }
                        });
                }
                else if (data.data.type === "master") {
                    fetch(`${route}/master`, {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.data) {
                                setRequests(data.data);
                            }
                        });
                }
                else if (data.data.type === "phd") {
                    fetch(`${route}/phd`, {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.data) {
                                setRequests(data.data);
                            }
                        });
                }
            });
    }, []);
    

  return (
<div className="profile">
    <div className="container">
<div class="e-card playing">
  <div className="image"></div>
  
  <div className="wave"></div>
  <div className="wave"></div>
  <div className="wave"></div>
  

<div className="infotop">      
Welcome <br />
{user.username}
<br />
{user.email}
<br />
request type <br /> {user.type}
  </div>
</div>
<div className="requests">
    <h2>Requests</h2>
    <div className="cards">
        {requests.map((request) => (
            <div className="request-card">
                <h3>Request State : {request.Eligibility}</h3>
                {request.Eligibility === "pending" ? null :<div>Current Step : {request.currentStep} </div>}
                
                
            </div>
        ))}
    </div>
</div>

    </div>
</div>
  )
}

export default Profile