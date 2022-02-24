import React, { useRef, useState } from "react";
import { userApi } from "../../api/userApi";
import { useDispatch } from "react-redux";
import * as actions from "../../store/user/actions";
import { TextField, Button } from "@mui/material";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const refEmail = useRef("");
  const refPassword = useRef("");
  const refSubm = useRef();
  const refError = useRef();

  function emailToState(EO) {
    setEmail(EO.target.value);
    if (
      !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        EO.target.value
      )
    ) {
      /*  refError.current.innerText = "Введите корректный email";
            refSubm.current.disabled = true;
          } else {
            refSubm.current.disabled = false;
            refError.current.innerText = "";*/
    }
  }

  function passwordToState(EO) {
    setPassword(EO.target.value);
  }

  async function signin(e) {
    const res = userApi.signin(email, password).then((result) => {
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
            ref={refEmail}
            onChange={emailToState}
            required
          />
        </label>
        <label id="password">
          <p>Пароль</p>
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type="password"
            ref={refPassword}
            onChange={passwordToState}
            required
          />
        </label>
        <br />
        <Button variant="contained" ref={refSubm} onClick={signin}>
          Войти
        </Button>
        <br />
        <span ref={refError}></span>
      </form>
    </div>
  );
};
export default SignIn;
