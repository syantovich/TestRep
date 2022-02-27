import React from "react";
import LogIn from "../../pages/LogIn/LogIn";
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
  dispatch(actions.local());
  return (
    <main>
      <Routes>
        <Route path="/" element={<Footer />} />
        {!user && <Route path="login" element={<LogIn />} />}
        {!user && <Route path="signup" element={<SignUp />} />}
      </Routes>
    </main>
  );
};
export default Main;
