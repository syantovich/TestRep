import axios from "axios";
import { API_URL } from "../constants/constants";

export const filmsApi = {
  getAllFilms(type) {
    const url = `${API_URL}movieinfo/getfilms`;
    return axios.post(url, { type });
  },
  getFilmsCategory(category, page) {
    const url = `${API_URL}movieinfo/category`;
    return axios.post(url, { category, page });
  },
  getMovie(id, dateWatching) {
    const url = `${API_URL}movie/get/${id}`;
    return axios.post(url, { dateWatching });
  },
  getFilmInfo(id) {
    const url = `${API_URL}movieinfo/getinfo/${id}`;
    return axios.get(url);
  },
  getSessionInfo(id) {
    const url = `${API_URL}movie/get/session/${id}`;
    return axios.get(url);
  },
};
