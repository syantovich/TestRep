import axios from "axios";
import { API_URL } from "../constants/constants";

export const userApi = {
  signIn(email, password) {
    const url = `${API_URL}authenticate`;
    return axios.post(url, { email, password });
  },
  signUp(email, password) {
    const url = `${API_URL}registration`;
    return axios.post(url, { email, password });
  },
  isUserPresent(email) {
    const url = `${API_URL}getuser/get`;
    return axios.post(url, { email });
  },

  user_me(token) {
    const url = `${API_URL}authenticate/employees`;
    return axios.get(url, { headers: { "x-access-token": token } });
  },
};
