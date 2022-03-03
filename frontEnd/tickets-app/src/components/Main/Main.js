import React, { useEffect } from "react";
import LogIn from "../../pages/LogIn/LogIn";
import { Route, Routes, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/user/selectors";
import * as actions from "../../store/user/actions";
import "./Main.scss";
import SignUp from "../../pages/SignUp/SignUp";
import MainPage from "../../pages/MainPage/MainPage";
import NavBar from "../NavBar/NavBar";
import Category from "../../pages/Category/Category";

const Main = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.local());
  }, []);
  const param = useParams();

  return (
    <main>
      <NavBar />
      <Routes>
        {!user && (
          <>
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
          </>
        )}
        <Route
          path="category/:category"
          element={<Category category={param.category} />}
        />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  );
};
export default Main;
