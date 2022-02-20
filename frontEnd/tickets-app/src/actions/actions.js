export const login = (value) => ({ type: "LOGIN", payload: { email: value } });
export const logout = () => ({ type: "LOGOUT" });
