import React from "react";
import SignIn from "../../pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { USER } from "../../store/user/selectors/selectors";

const Main = () => {
  const user = useSelector(USER);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Footer></Footer>}></Route>
        <Route
          path="/registration"
          element={!user ? <SignIn></SignIn> : false}
        ></Route>
      </Routes>
    </main>
  );
};
export default Main;
