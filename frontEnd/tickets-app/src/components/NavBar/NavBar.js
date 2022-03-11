import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.scss";
import classNames from "classnames";
import { isActiveItem } from "react-alice-carousel/lib/utils";

const NavBar = () => {
  const isActiveClass = (isActive) =>
    classNames({ navLink: true, activeNavLink: isActive });
  return (
    <div className="flex">
      <NavLink end to="/" className={isActiveClass}>
        Главная
      </NavLink>
      <NavLink end to="/category/comedy" className={isActiveClass}>
        Комедии
      </NavLink>
      <NavLink end to="/category/horror" className={isActiveClass}>
        Ужасы
      </NavLink>
      <NavLink end to="/category/action" className={isActiveClass}>
        Боевики
      </NavLink>
      <NavLink end to="/category/melodrama" className={isActiveClass}>
        Мелодрамы
      </NavLink>
      <NavLink end to="/category/fantasy" className={isActiveClass}>
        Фентези
      </NavLink>
      <NavLink end to="/category/cartoon" className={isActiveClass}>
        Мультики
      </NavLink>
      <NavLink end to="/category/thriller" className={isActiveClass}>
        Триллер
      </NavLink>
    </div>
  );
};
export default NavBar;
