import React, { useState } from 'react';
import './Login.css';
import { login, signup } from '../../firebase'; 


// Ensure this is the correct path to your Firebase functions

const Login = () => {
  const [signState, setsignstate] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading,setloading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setloading(true)
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setloading(false)
  }

  return (
    loading?<div className="loginspinner">
      <img src="./netflix_spinner.gif" alt="" />
    </div>:
    <div className='login'>
      <img src="./logo.png" alt="" className='logo-log' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder='Your name'
            />
          )}
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder='Password'
          />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" /><label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setsignstate("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setsignstate("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login;
