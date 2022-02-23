import React from "react";
import SignIn from "../../pages/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getUser } from "../../store/user/selectors/selectors";

const Main = () => {
  const user = useSelector(getUser);
  return (
    <main>
      <Routes>
        <Route path="/" element={<Footer />} />
        {!user ? (
          <Route path="registration" element={<SignIn></SignIn>} />
        ) : (
          false
        )}
      </Routes>
    </main>
  );
};
export default Main;
