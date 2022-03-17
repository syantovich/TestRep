import { userApi } from "../../api/userApi";

export const USER_ACTIONS = { login: "[User] Login", logout: "[User] Logout" };
export const login =
  (email, password, setErrorMessage, navigate) => async (dispatch) => {
    setErrorMessage("");
    try {
      const result = await userApi.signIn(email, password);

      localStorage.setItem("TicketsApp_User_token", result.data);
      navigate("/");
      dispatch({
        type: USER_ACTIONS.login,
        payload: { email },
      });
    } catch {
      setErrorMessage("Неверный логин и пароль");
    }
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
        let result = await userApi.signUp(email, password);
        if (result.status === 200) {
          navigate("/");
          dispatch({
            type: USER_ACTIONS.login,
            payload: { email },
          });
          setErrorMessage("");
          const res = userApi.signIn(email, password);
          localStorage.setItem("TicketsApp_User_token", res.data);
        }
      } catch {
        setErrorMessage("Такой пользователь уже существует");
      }
    } else {
      console.log("Invalid Form");
    }
  };
export const local = () => async (dispatch) => {
  const emailInLocalStorage = localStorage.getItem("TicketsApp_User_token");
  if (emailInLocalStorage !== null) {
    const result = await userApi.user_me(emailInLocalStorage);
    if (result.status === 200) {
      const email = result.data.email;
      dispatch({
        type: USER_ACTIONS.login,
        payload: { email },
      });
    }
  }
};
