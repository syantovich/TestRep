import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER } from "../../store/user/selectors/selectors";
import * as actions from "../../store/user/actions/actions";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const user = useSelector(USER);
  const dispatch = useDispatch();
  return (
    <div
      className="user"
      onClick={user ? () => dispatch(actions.logout()) : null}
    >
      {user ? (
        <React.Fragment>
          <div>{user}</div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="32"
              height="49"
              fill="#EAE7E7"
              stroke="black"
            />
            <path
              d="M18.2929 22.2929C17.9024 22.6834 17.9024 23.3166 18.2929 23.7071L24.6569 30.0711C25.0474 30.4616 25.6805 30.4616 26.0711 30.0711C26.4616 29.6805 26.4616 29.0474 26.0711 28.6569L20.4142 23L26.0711 17.3431C26.4616 16.9526 26.4616 16.3195 26.0711 15.9289C25.6805 15.5384 25.0474 15.5384 24.6569 15.9289L18.2929 22.2929ZM50 22L19 22V24L50 24V22Z"
              fill="black"
            />
          </svg>
        </React.Fragment>
      ) : (
        <Link to="/registration">
          <div>Войти</div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#E9E9E9" />
            <circle cx="25.5" cy="20.5" r="7.5" fill="black" />
            <path
              d="M42 43C39 45.5 35.4934 50 25 50C14.5066 50 10.5 46 8 43C12 34.5 15.5066 28 26 28C36.4934 28 40.5 37.5 42 43Z"
              fill="black"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default UserLogin;
