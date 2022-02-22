import React from "react";
import "./Header.scss";
import Schedule from "./Schedule";
import Search from "./Search";
import UserLogin from "./UserLogin";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="wrap-search">
          <Schedule />
          <Search></Search>
          <UserLogin></UserLogin>
        </div>
      </div>
    </header>
  );
};
export default Header;
