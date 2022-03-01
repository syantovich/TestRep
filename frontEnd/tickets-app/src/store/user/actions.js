import { userApi } from "../../api/userApi";

export const USER_ACTIONS = { login: "[User] Login", logout: "[User] Logout" };
export const login =
  (email, password, setErrorMessage, navigate) => async (dispatch) => {
    setErrorMessage("");
    userApi
      .signIn(email, password)
      .then((result) => {
        localStorage.setItem("TicketsApp_User_token", result.data);
        navigate("/");
        dispatch({
          type: USER_ACTIONS.login,
          payload: { email },
        });
      })
      .catch(() => setErrorMessage("Неверный логин и пароль"));
  };
export const logout = () => {
  localStorage.removeItem("TicketsApp_User_token");
  return { type: USER_ACTIONS.logout };
};
export const signup =
  (email, password, isValidEmail, isValidPassword, setErrorMessage, navigate) =>
  async (dispatch) => {
    if (isValidEmail && isValidPassword) {
      try {
        await userApi.signUp(email, password).then((result) => {
          if (result.status === 200) {
            navigate("/");
            dispatch({
              type: USER_ACTIONS.login,
              payload: { email },
            });
            setErrorMessage("");
            userApi.signIn(email, password).then((result) => {
              localStorage.setItem("TicketsApp_User_token", result.data);
            });
          }
        });
      } catch {
        setErrorMessage("Такой пользователь уже существует");
      }
    } else {
      console.log("Invalid Form");
    }
  };
export const local = () => (dispatch) => {
  const emailInLocalStorage = localStorage.getItem("TicketsApp_User_token");
  if (emailInLocalStorage !== null) {
    userApi.user_me(emailInLocalStorage).then((result) => {
      if (result.status === 200) {
        const email = result.data.email;
        dispatch({
          type: USER_ACTIONS.login,
          payload: { email },
        });
      }
    });
  }
};
