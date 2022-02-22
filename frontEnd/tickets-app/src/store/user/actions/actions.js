export const USER_ACTIONS = { login: "[User] Login", logout: "[User] Logout" };
export const login = (value) => ({
  type: USER_ACTIONS.login,
  payload: { email: value },
});
export const logout = () => ({ type: USER_ACTIONS.logout });
