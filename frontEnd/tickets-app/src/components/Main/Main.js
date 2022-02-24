import React from "react";
import SignIn from "../../pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/user/selectors";
import { userApi } from "../../api/userApi";
import * as actions from "../../store/user/actions";
import "./Main.scss";
import SignUp from "../../pages/SignUp/SignUp";

const Main = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  if (localStorage.getItem("TicketsApp_User_token") !== undefined) {
    userApi
      .user_me(`${localStorage.getItem("TicketsApp_User_token")}`)
      .then((result) => {
        if (result.status === 200) {
          dispatch(actions.login(result.data.email));
        }
      });
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Footer />} />
        {!user && <Route path="signin" element={<SignIn />} />}
        {!user && <Route path="signup" element={<SignUp />} />}
      </Routes>
    </main>
  );
};
export default Main;
