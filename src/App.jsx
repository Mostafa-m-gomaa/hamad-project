import React, { useContext, useState ,useEffect ,createContext} from 'react';
import { Route, Routes } from "react-router";
import './App.css'
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import Login from './component/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import SignUp from './component/sign-up/SignUp';
import Verify from './component/verify/Verify';
import Apply from './component/apply/Apply';
import Bachelor from './component/bachelor/Bachelor';
import Profile from './component/profile/Profile';
export const AppContext=createContext()
function App() {
  const [login,setLogin] =useState(false)
  const [token,setToken] =useState("")
  const [loader ,setLoader] =useState(false)
  const [route ,setRoute]=useState("https://api.hamad-edu.com/api/v1")


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
      setLogin(true)

    }
    
  
  },[login])

  useEffect(()=>{
    AOS.init();
   },[])
  


  return (
    <AppContext.Provider value={{login,setLogin,token,setToken,loader,setLoader,route,setRoute}}>
    <>
    {loader ?    <div className="spin-cont"><div className="spinner">
  <div className="rect1"></div>
  <div className="rect2"></div>
  <div className="rect3"></div>
  <div className="rect4"></div>
  <div className="rect5"></div>
</div></div>:null}
    <ToastContainer />
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='verify' element={<Verify/>}/>
        <Route path='apply' element={<Apply/>}/>
        <Route path='bachelor' element={<Bachelor/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </>
   </AppContext.Provider>
  )
}

export default App
