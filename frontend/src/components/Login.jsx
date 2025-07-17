import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    if(user){
        if (user.email===email && user.password===password){
            alert("login successful")          
             navigate("/todo");

        }
        else if(user.email === email && user.password !==password){
            alert("check password")
        }

    }
    else{
        alert("no user data found, please Signup first")
    }

  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onFormSubmit}>
        <br />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={onPasswordChange}
        />
        <br />
        <button>Login</button>
      </form>
      <p>
        Don't have an account? <a href="/">Signup</a>
      </p>
    </div>
  );
}
