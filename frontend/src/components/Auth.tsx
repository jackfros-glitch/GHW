import React from "react";

export const LoginForm = () => {
  return (
    <form className="form">
      <h1> Login </h1>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
    </form>
  );
};

export const SignUpForm = () => {
  return <form></form>;
};
