import React, { useState } from "react";
import { userApi } from "../../api/userApi";
import { useDispatch } from "react-redux";
import * as actions from "../../store/user/actions";
import { TextField, Button } from "@mui/material";
import { userExp } from "../../regExp/user";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function emailToState(EO) {
    setEmail(EO.target.value);
    if (userExp.email.test(EO.target.value)) {
      if (!isValidEmail) {
        setValidEmail(true);
      }
    } else {
      if (isValidEmail) {
        setValidEmail(false);
      }
    }
  }

  function passwordToState(EO) {
    setPassword(EO.target.value);

    if (EO.target.value === secondPassword && password.length > 7) {
      if (!isValidPassword) {
        setValidPassword(true);
      }
    } else {
      if (isValidPassword) {
        setValidPassword(false);
      }
    }
  }

  function secondPasswordToState(EO) {
    setSecondPassword(EO.target.value);
    if (password === EO.target.value && password.length > 7) {
      if (!isValidPassword) {
        setValidPassword(true);
      }
    } else {
      if (isValidPassword) {
        setValidPassword(false);
      }
    }
  }

  return (
    <div className="center signin">
      <form>
        <label>
          <p>Почта</p>

          <TextField
            id="e-mail"
            label="Почта"
            variant="outlined"
            onChange={emailToState}
            required
          />
        </label>
        <span>{!isValidEmail ? "Введите корректную почту" : ""}</span>
        <label>
          <p>Пароль</p>
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={passwordToState}
            required
          />
        </label>
        <label>
          <p>Повторите пароль</p>
          <TextField
            label="Пароль"
            variant="outlined"
            type="password"
            onChange={secondPasswordToState}
            required
          />
        </label>
        <span>
          {!isValidPassword
            ? "Пароли должны совпадать и длинна должна быть больше 8 символо"
            : ""}
        </span>
        <br />
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              actions.signup(
                email,
                password,
                isValidEmail,
                isValidPassword,
                setErrorMessage,
                navigate
              )
            );
          }}
        >
          Войти
        </Button>
        <br />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};
export default SignUp;
