import axios from "axios";

export const userApi = {
  signin(email, password) {
    const url = `http://127.0.0.1:3000/authenticate`;
    return axios.post(url, { email, password });
  },
  signup(email, password) {
    const url = "http://127.0.0.1:3000/registration";
    return axios.post(url, { email, password });
  },
  isUserBe(email) {
    const url = "http://127.0.0.1:3000/getuser/get";
    return axios.post(url, { email });
  },

  user_me(token) {
    const url = "http://127.0.0.1:3000/authenticate/employees";
    return axios.get(url, { headers: { "x-access-token": token } });
  },
};
