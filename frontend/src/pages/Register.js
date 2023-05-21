import React, { useState } from "react";
import styles from "../css/register.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  let navigte = useNavigate();

  const routeToLogin = () => {
    navigte("/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/signup", {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        age: age,
      })
      .then((res) => {
        if (res.status === 200) {
          navigte("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {/* <h1 className={styles.h1}>Register</h1> */}
        <div style={{ paddingTop: "100px", paddingLeft: "100px" }}>
          <form onSubmit={routeToLogin}>
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
              <span>Email:</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <button
              onClick={handleRegister}
              className={styles.button}
              type="submit"
            >
              Register
            </button>
            <div style={{ marginTop: "10px" }}>
              <Link className={styles.link} to="/login">
                Already have an account? <strong>Login</strong> here!
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.form}>
            <h1 className={styles.h1}>Welcome to fam.ily</h1>
          </div>
        </div>
        <img
          // className={styles.heroimage}
          // src="https://svgshare.com/i/sEE.svg"
          src="https://static.vecteezy.com/system/resources/previews/002/292/974/non_2x/happy-family-with-son-and-daughter-parents-hugging-children-illustration-vector.jpg"
          alt="asdf"
        />
      </div>
    </div>
  );
};

export default Register;
