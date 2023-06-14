import React, { useState } from "react";
import classes from "./style/Login.module.css";
import { useAuth } from "../../context/AuthContextProvider";

const ResetPassword = () => {
  const { forgotPassword } = useAuth();
  const [inpReset, setInpReset] = useState("");
  console.log(inpReset);

  async function handleSave() {
    await forgotPassword(inpReset);
  }
  return (
    <div className={classes.wrapper}>
      <hr />
      <div className={classes.textBox}>
        <h1>Password Reset</h1>
        <p>
          Enter your <b>email address</b> that you used to register. We'll send
          you an email with your username and a link to reset your password.
        </p>
      </div>
      <div className={classes.mainForm}>
        <div className={classes.fromP}>
          <p>Email address or username</p>
        </div>
        <input
          type="text"
          placeholder="Enter Email address adress.."
          onChange={(e) => setInpReset(e.target.value)}
        />
        <button onClick={handleSave}>Send</button>
      </div>
      <div className={classes.support}>
        <span>If you still need help, contact PLAY. Support</span>
      </div>
    </div>
  );
};

export default ResetPassword;
