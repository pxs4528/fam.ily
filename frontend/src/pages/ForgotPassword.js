import React, { useState } from "react";
import styles from "../css/forgot.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const routeToLogin = () => {
    navigate("/");
  };

  const handleReset = async (e) => {
    e.preventDefault();
    console.log(email);
    sessionStorage.setItem("email", email);
    axios
      .post("http://localhost:3030/pwReset", {
        email,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Check your email for a link to reset your password!!!!!!");
          localStorage.setItem("email", email);
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
          <form onSubmit={routeToLogin}>
            <label>
              <span className={styles.username}>Email</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button
              onClick={handleReset}
              className={styles.button}
              type="submit"
            >
              Reset Password
            </button>
            <div style={{ marginTop: "10px" }}>
              <Link className={styles.link} to="/login">
                Back to <strong>Login</strong>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.form}>
            <h1 className={styles.h1}>No worry!</h1>
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

export default Forgot;
