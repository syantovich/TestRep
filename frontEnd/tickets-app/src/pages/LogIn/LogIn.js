import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/user/actions";
import { TextField, Button } from "@mui/material";
import { userExp } from "../../regExp/user";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { maxLengthPassword } from "../../constants/constants";

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);
  const [isValidReCAPTCHA, setValidReCAPTCHA] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function emailToState(EO) {
    setEmail(EO.target.value);

    setValidEmail(userExp.email.test(email));
  }

  function passwordToState(EO) {
    setPassword(EO.target.value);
    if (password.length > maxLengthPassword) {
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
        <ReCAPTCHA
          sitekey={window.location.origin + "/login"}
          onChange={() => {
            setValidReCAPTCHA(true);
          }}
        />
        <br />
        <Button
          variant="contained"
          onClick={() =>
            dispatch(actions.login(email, password, setErrorMessage, navigate))
          }
          disabled={!isValidEmail || !isValidPassword}
        >
          Войти
        </Button>
        <br />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};
export default LogIn;
