import React, { useRef, useState } from "react";
import { userApi } from "../../api/userApi";
import { useDispatch } from "react-redux";
import * as actions from "../../store/user/actions";
import { TextField, Button } from "@mui/material";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [isValidForm, setValidForm] = useState({
    email: false,
    isCorretPassword: false,
  });

  const refEmail = useRef("");
  const refPassword = useRef("");
  const refSubm = useRef();
  const refError = useRef();

  async function emailToState(EO) {
    console.log(EO.target.value);
    if (
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        EO.target.value
      )
    ) {
      userApi.isUserBe(EO.target.value).then((res) => {
        if (!res.data) {
          console.log(res.data);
          setEmail(EO.target.value);
          setValidForm({ ...isValidForm, email: true });
          /*  refError.current.innerText = "Введите корректный email";
            refSubm.current.disabled = true;
          } else {
            refSubm.current.disabled = false;
            refError.current.innerText = "";*/
        }
      });
    }
  }

  function passwordToState(EO) {
    setPassword(EO.target.value);
    if (password === secondPassword) {
      setValidForm({ ...isValidForm, isCorretPassword: true });
    } else {
      setValidForm({ ...isValidForm, isCorretPassword: true });
    }
  }

  function secondpasswordToState(EO) {
    setSecondPassword(EO.target.value);
    if (password === secondPassword) {
      setValidForm({ ...isValidForm, isCorretPassword: true });
    }
  }

  async function signup(e) {
    let all = 2;
    for (let key in isValidForm) {
      if (isValidForm[key]) {
        all--;
      }
    }
    if (!all) {
      await userApi.signup(email, password).then((result) => {
        console.log(result);
        dispatch(actions.login(email));
        userApi.signin(email, password).then((result) => {
          localStorage.setItem("TicketsApp_User_token", result.data);
        });
      });
    } else {
      console.log("Invalid Form");
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
            ref={refEmail}
            onChange={emailToState}
            required
          />
        </label>
        <label>
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
        <label>
          <p>Повторите пароль</p>
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
        <Button variant="contained" ref={refSubm} onClick={signup}>
          Войти
        </Button>
        <br />
        <span ref={refError}></span>
      </form>
    </div>
  );
};
export default SignUp;
