import React, { useState, useEffect } from "react";
import styles from "../css/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
const Login = () => {
  //route to dashboard
  const routeToDashBoard = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  const routeToWebLogin = (e) => {
    e.preventDefault();

    navigate("/facerec");
  };

  const [user, setUser] = useState(null);

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    localStorage.setItem("user", userObject.name);
    localStorage.setItem("email", userObject.email);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  //async function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3030/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("member_id", res.data.member_id);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("account", res.data.account);
          localStorage.setItem("picture", res.data.picture);
          localStorage.setItem("age", res.data.age);
          console.log(res.data.member_id);
          console.log(localStorage);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div style={{ paddingTop: "100px", paddingLeft: "100px" }}>
          <form onSubmit={handleLogin}>
            <label>
              <span className={styles.username}>Username:</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <span className={styles.password}>Password:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <Link className={styles.forgot} to="/forgot-password">
                Forgot Password?
              </Link>
            </label>
            <button type="submit">Login</button>
            <button type="submit" onClick={(e) => routeToWebLogin(e)}>Login through Webcam</button>
            <div id="signInDiv"></div>
            {user && (
              <div>
                <img alt="user pfp" src={user.picture}></img>
                <p className={styles.h1}>Logged in as {user.name}</p>
                <button type="submit" onClick={(e) => routeToDashBoard(e)}>
                  Continue To Dashboard
                </button>
              </div>
            )}
            <div style={{ marginTop: "10px" }}>
              <Link className={styles.link} to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.form}>
            <h1 className={styles.h1}>Welcome back!</h1>
          </div>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/292/974/non_2x/happy-family-with-son-and-daughter-parents-hugging-children-illustration-vector.jpg"
          alt="asdf"
        />
      </div>
    </div>
  );
};

export default Login;