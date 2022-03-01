import axios from "axios";

export const filmsApi = {
  getMovieInfo(type) {
    const url = `http://127.0.0.1:3000/movieinfo/getfilms`;
    return axios.post(url, { type });
  },
};
