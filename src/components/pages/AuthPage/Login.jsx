import React, { useState } from "react";
import classes from "./style/Login.module.css";
import facebookLogo from "./assets/facebook-logo.png";
import googleLogo from "./assets/icon-google.png";
import hide from "./assets/hide.png";
import eye from "./assets/eye.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSave(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      login(formData, email);
    }
  }
  return (
    <div className={classes.wrapperLogIn}>
      <div className={classes.boxLogIn}>
        <div className={classes.loginBox}>
          <h1>Log in to PLAY.</h1>
          <div className={classes.btnBox}>
            <Link>
              <button className={classes.btnGoogle}>
                <img src={googleLogo} alt="" />
                <p>Continue with Google</p>
              </button>
            </Link>
            <Link>
              <button className={classes.btnFacebook}>
                <img src={facebookLogo} alt="" />
                <p>Continue with Facebook</p>
              </button>
            </Link>
          </div>
          <hr />
          <form action="" className={classes.form}>
            <div className={classes.formGroup}>
              <div className={classes.LabelGroup}>
                <label htmlFor="email" className={classes.LabelInner}>
                  <span>Email</span>
                </label>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input"
                autoComplete="user-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classes.help}>
                <span>You need to enter your email</span>
              </div>
            </div>
            <div className={classes.formGroup}>
              <div className={classes.LabelGroup}>
                <label htmlFor="password" className={classes.LabelInner}>
                  <span>Password</span>
                </label>
              </div>
              <div className={classes.passwordBlock}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password-input"
                  placeholder="Password"
                  className="input"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={classes.password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  {showPassword ? (
                    <img src={eye} alt="eye" />
                  ) : (
                    <img src={hide} alt="hideEye" />
                  )}
                </button>
              </div>
              <div className={classes.help}>
                <span>You need to enter a password.</span>
              </div>
            </div>
            <div className={classes.ButtonContainer}>
              <button className={classes.button} onClick={handleSave}>
                <span>Log in</span>
              </button>
            </div>
            <div className={classes.forgotPaaasword}>
              <div className={classes.forgotLink}>
                <button
                  onClick={() => {
                    navigate("/reset");
                  }}
                >
                  Forgot your password?
                </button>
              </div>
            </div>
          </form>
          <hr />
          <p className={classes.typeElement}>
            <span>
              Don't have an account?
              <Link to="/registr">Sign up for PLAY.</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
