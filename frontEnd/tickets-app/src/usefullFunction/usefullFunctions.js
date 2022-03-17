import { parseISO } from "date-fns";

export const usefullFunctions = {
  onlyDayMonthYear: (date, isParse) => {
    const date1 = new Date(date);
    const y = date1.getFullYear();
    let m = date1.getMonth() + 1;
    m = m < 10 ? `0${m}` : m;
    let d = date1.getDate();
    d = d < 10 ? `0${d}` : d;
    const newDate = `${y}-${m}-${d}`;
    return isParse ? parseISO(newDate) : newDate;
  },
  formatDataForFilm: (response, sessions) => {
    response.data.forEach((e) => {
      if (e.cinema.name in sessions) {
        if (e.hall.name in sessions[e.cinema.name]) {
          sessions[e.cinema.name][e.hall.name].push(e);
        } else {
          sessions[e.cinema.name][e.hall.name] = [e];
        }
      } else {
        sessions[e.cinema.name] = {};
        sessions[e.cinema.name][e.hall.name] = [e];
      }
    });
  },
};
