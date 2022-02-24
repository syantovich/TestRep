import axios from "axios";

export const userApi = {
  signIn(email, password) {
    const url = `http://127.0.0.1:3000/authenticate`;
    return axios.post(url, { email, password });
  },
  signUp(email, password) {
    const url = "http://127.0.0.1:3000/registration";
    return axios.post(url, { email, password });
  },
  isUserPresent(email) {
    const url = "http://127.0.0.1:3000/getuser/get";
    return axios.post(url, { email });
  },

  user_me(token) {
    const url = "http://127.0.0.1:3000/authenticate/employees";
    return axios.get(url, { headers: { "x-access-token": token } });
  },
};
