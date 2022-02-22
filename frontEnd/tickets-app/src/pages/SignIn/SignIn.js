import React from "react";

const SignIn = () => {
  return (
    <React.Fragment>
      <form>
        <label id="email">
          <p>Почта</p>
          <input type="text" required />
          <span className="error"></span>
        </label>
        <label id="password">
          <p>Пароль</p>
          <input type="password" required />
          <span className="error"></span>
        </label>
        <button id="submit">Войти</button>
      </form>
    </React.Fragment>
  );
};
export default SignIn;
