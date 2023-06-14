import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import facebookLogo from "./assets/facebook-logo.png";
import googleLogo from "./assets/icon-google.png";
import classes from "./style/SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();

  function handleSave(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      register(formData);
    }
  }

  return (
    <div className={classes.mainBlock}>
      <div className={classes.registerBox}>
        <h2>Sign up for free to start listening.</h2>
        <Link>
          <button className={classes.btnFacebook}>
            <img src={facebookLogo} alt="" />
            <p>Sign up with Facebook</p>
          </button>
        </Link>

        <Link>
          <button className={classes.btnGoogle}>
            <img src={googleLogo} alt="" />
            <p>Sign up with Google</p>
          </button>
        </Link>
        <span className={classes.span}>or</span>

        {/* form */}
        <form action="" className={classes.form}>
          <h2>Sign up with your email address</h2>
          <div className={classes.formGroup}>
            <div className={classes.LabelGroup}>
              <label htmlFor="email" className={classes.LabelInner}>
                <span>What's your email?</span>
              </label>
            </div>
            <input
              type="email"
              placeholder="Enter your email."
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="user-email"
            />
            <span class={classes.toastMsg} id={classes.invalidToast}>
              <i className={classes.faSolid}>
                <p>Please enter the correct email format!</p>
              </i>
            </span>
          </div>

          <div className={classes.formGroup}>
            <div className={classes.LabelGroup}>
              <label htmlFor="password" className={classes.LabelInner}>
                <span>Create a password</span>
              </label>
            </div>
            <input
              type="password"
              placeholder="Enter your password."
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div className={classes.help}>
              <span>You need to enter a password.</span>
            </div>
          </div>
          <div className={classes.formGroup}>
            <div className={classes.LabelGroup}>
              <label htmlFor="password_confirm" className={classes.LabelInner}>
                <span>Confirm password</span>
              </label>
            </div>
            <input
              type="password"
              placeholder="Enter your password."
              className="input"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              autoComplete="confirm-password"
            />
            <div className={classes.help}>
              <span>You need to enter a password.</span>
            </div>
          </div>
          <div className={classes.ButtonContainer}>
            <button className={classes.button} onClick={handleSave}>
              <span>Sign up</span>
            </button>
          </div>

          <p className={classes.typeElement}>
            <span>
              Have an account?
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
