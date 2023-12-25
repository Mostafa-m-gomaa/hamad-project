import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();
  const { setLoader, setLogin, route } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(`${route}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log(response);
      setLoader(false);
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("login", true);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("id", response.data.id);

        setLogin(true);
        history("/");
      } else if (response.status == "fail") {
        toast.error(response.message);
      } else {
        toast.error("هناك خطأ بكلمة السر أو الأيميل حاول مرة أخري");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div class="container">
        <div class="heading">Sign In</div>
        <form action="" class="form" onSubmit={handleLogin}>
          <input
            required=""
            class="input"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
          <input
            required=""
            class="input"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Password"
          />
          {/* <span class="forgot-password"><a href="#">Forgot Password ?</a></span> */}
          <input class="login-button" type="submit" value="Sign In" />
          <span class="agreement">you haven`t account</span>
          <Link to="/sign-up" class="login-button">
            Sign Up
          </Link>
        </form>
        <span class="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
