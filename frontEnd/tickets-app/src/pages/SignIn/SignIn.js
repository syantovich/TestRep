import React, { useState } from "react";
import { userApi } from "../../api/userApi";
import { useDispatch } from "react-redux";
import * as actions from "../../store/user/actions";
import { TextField, Button } from "@mui/material";
import { userExp } from "../../regExp/user";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);

  function emailToState(EO) {
    setEmail(EO.target.value);
    if (!userExp.email.test(email)) {
      if (isValidEmail) {
        setValidEmail(false);
      }
    } else {
      if (!isValidEmail) {
        setValidEmail(true);
      }
    }
  }

  function passwordToState(EO) {
    setPassword(EO.target.value);
    if (password.length > 7) {
      if (!isValidPassword) {
        setValidPassword(true);
      }
    } else {
      if (isValidPassword) {
        setValidPassword(false);
      }
    }
  }

  async function signIn() {
    userApi.signIn(email, password).then((result) => {
      console.log(result);
      localStorage.setItem("TicketsApp_User_token", result.data);
      dispatch(actions.login(email));
    });
  }

  return (
    <div className="center signin">
      <form>
        <label id="email">
          <p>Почта</p>

          <TextField
            id="e-mail"
            label="Почта"
            variant="outlined"
            onChange={emailToState}
            required
          />
          <span>{!isValidEmail ? "Введите корректную почту" : ""}</span>
        </label>
        <label id="password">
          <p>Пароль</p>
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={passwordToState}
            required
          />
          <span>
            {!isValidPassword
              ? "Пароль должен содеражть минимум 8 символов"
              : ""}
          </span>
        </label>
        <br />
        <Button
          variant="contained"
          onClick={signIn}
          disabled={!isValidEmail || !isValidPassword ? true : false}
        >
          Войти
        </Button>
        <br />
      </form>
    </div>
  );
};
export default SignIn;
