import React from "react";

import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from '../../Components/sign-up/sign-up.component';

import "./sign-in-and-sign-out.styles.scss";

const signInAndSignOut = () => (
  <div className="signInAndSignUp">
    <SignIn />
    <SignUp />
  </div>
);

export default signInAndSignOut;
