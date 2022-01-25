import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  let history = useNavigate();
  const [warnUS, setWarnUS] = useState(false);
  const [warnPASS, setWarnPASS] = useState(false);
  const [warnEM, setWarnEM] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    visibility: false,
  });
  var passVer = true;
  var emailVer = true;

  const registerValues = (event) => {
    setValues((lastValue) => {
      return {
        ...lastValue,
        [event.target.name]: event.target.value,
      };
    });
  };

  const clickVisibility = () => {
    setValues({ ...values, visibility: !values.visibility });
  };

  function verifyPassword(str) {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return re.test(str);
  }

  function verifyEmail(str) {
    return str.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  function validateInfo() {
    // initialization
    setWarnUS(false);
    setWarnPASS(false);
    setWarnEM(false);

    // handle empty inputs
    if (values.username === "") setWarnUS(true);
    if (values.password === "") setWarnPASS(true);
    if (values.email === "") setWarnEM(true);

    //  handle password format
    if (values.password !== "" && !verifyPassword(values.password)) {
      alert(
        "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!"
      );
      passVer = false;
      setWarnPASS(true);
    }

    // handle email format
    if (values.email !== "" && !verifyEmail(values.email)) {
      alert("Invalid email!");
      emailVer = false;
      setWarnEM(true);
    }
  }

  function fetchRegister() {
    const info = {
      username: "alisssdsdsd",
      password: "Ali123456",
      email: "abc@yahoo.com",
    };

    axios.post("http://localhost:8000/register/", info).then(
      (response) => {
        history.push({
          pathname: "/",
          state: {
            username: response.data.username,
          },
        });
        alert(response.status);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateInfo();
    if (!warnUS && !warnPASS && !warnEM && passVer && emailVer) {
      fetchRegister();
      // <Link to="/" />; // how???????????
    }
  }

  // --------------- HTML View ---------------
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="text">
            <h3>Sign Up</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-text">
              <input
                name="email"
                type="text"
                placeholder="EMAIL"
                value={values.email}
                onChange={registerValues}
                className={` ${warnEM ? "warning" : ""}`}
              />
            </div>

            <div className="input-text">
              <input
                name="username"
                type="text"
                placeholder="USERNAME"
                value={values.username}
                onChange={registerValues}
                className={` ${warnUS ? "warning" : ""}`}
              />
            </div>

            <div className="input-text">
              <input
                name="password"
                type={values.visibility ? "text" : "password"}
                placeholder="PASSWORD"
                value={values.password}
                onChange={registerValues}
                className={` ${warnPASS ? "warning" : ""}`}
              />
              <IconButton onClick={clickVisibility} class="eye">
                {values.visibility ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </div>

            <div className="buttons">
              <button type="submit">CREATE ACCOUNT</button>
            </div>

            <div className="change">
              <h3>
                Already a redditor? <Link to="/">SIGN IN</Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
