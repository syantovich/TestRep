import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="flex">
      <NavLink
        end
        to="/"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Главная
      </NavLink>
      <NavLink
        end
        to="/category/comedy"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Комедии
      </NavLink>
      <NavLink
        end
        to="/category/horror"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Ужасы
      </NavLink>
      <NavLink
        end
        to="/category/action"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Боевики
      </NavLink>
      <NavLink
        end
        to="/category/melodrama"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Мелодрамы
      </NavLink>
      <NavLink
        end
        to="/category/fantasy"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Фентези
      </NavLink>
      <NavLink
        end
        to="/category/cartoon"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Мультики
      </NavLink>
      <NavLink
        end
        to="/category/thriller"
        className={(isActive) => "navLink" + (isActive ? ` activeNavLink` : "")}
      >
        Триллер
      </NavLink>
    </div>
  );
};
export default NavBar;
