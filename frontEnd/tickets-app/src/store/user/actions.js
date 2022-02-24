export const USER_ACTIONS = { login: "[User] Login", logout: "[User] Logout" };
export const login = (value) => ({
  type: USER_ACTIONS.login,
  payload: { email: value },
});
export const logout = () => {
  localStorage.removeItem("TicketsApp_User_token");
  return { type: USER_ACTIONS.logout };
};
