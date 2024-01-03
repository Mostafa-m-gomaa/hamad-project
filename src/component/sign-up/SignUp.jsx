import "../login/login.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const history = useNavigate();
  const { route, setLoader } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoader(true);

    try {
      const response = await fetch(`${route}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: userName,
          phone: phone,
          passwordConfirm: confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log(response);
      setLoader(false);
      if (response.token) {
        localStorage.setItem("token", response.token);
        history("/verify");
      } else if (response.errors) {
        toast.error(response.errors[0].msg);
      } else {
        toast.error("هناك خطأ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="heading">Sign Up</div>
        <form action="" className="form" onSubmit={handleLogin}>
          <input
            required=""
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            name="email"
            id="email"
            placeholder="User Name"
          />
          <input
            required=""
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required=""
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            type="text"
            name="phone"
            id="phone"
            placeholder="phone"
          />
          <input
            required=""
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password-Confirm"
          />
          <input
            required=""
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password-Confirm"
          />
          <input className="login-button" type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
