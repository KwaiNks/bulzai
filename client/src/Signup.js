import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
        navigate("/");
      }
    });
  }

  const gotoLoginPage = () => navigate("/login");

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label htmlFor="username">Username</label>

      <Input  type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        icon='user' 
        iconPosition='left' 
        placeholder='Username...' />

      <label htmlFor="password">Password</label>
      <Input  type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        placeholder="Password..."
        icon='key' 
        iconPosition='left'/>

      <Button type="submit">Sign Up</Button>

      <p>
        Already have an account?{" "}
        <span className="lowlink" onClick={gotoLoginPage}>
          Login
        </span>
      </p>
    </form>
  );
}

export default Signup;
