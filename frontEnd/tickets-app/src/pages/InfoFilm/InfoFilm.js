import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { filmsApi } from "../../api/filmsApi";
import { useParams } from "react-router-dom";
import "./InfoFilms.scss";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import MovieSession from "../../components/MovieSession/MovieSession";
import { usefullFunctions } from "../../usefullFunction/usefullFunctions";
import { parseISO } from "date-fns";

const InfoFilm = () => {
  registerLocale("ru", ru);

  const [film, setFilm] = useState([]);
  const [date, setDate] = useState(
    usefullFunctions.onlyDayMonthYear(Date.now())
  );
  const [filmInfo, setFilmInfo] = useState({});
  const param = useParams();

  const getArrFilms = async (newDate) => {
    let response = await filmsApi.getMovie(param.id, newDate);
    const sessions = {};
    console.log(response);

    response.data.forEach((e) => {
      if (e.cinema.name in sessions) {
        if (e.hall.name in sessions[e.cinema.name]) {
          sessions[e.cinema.name][e.hall.name].push(e.session);
        } else {
          sessions[e.cinema.name][e.hall.name] = [e.session];
        }
        console.log(e.hall.name);
      } else {
        sessions[e.cinema.name] = {};
        sessions[e.cinema.name][e.hall.name] = [e.session];
      }
    });
    let arrElem = [
      <MovieSession hall="Залл" cinema="Кинотеатр" key="header"></MovieSession>,
    ];
    for (let keyCinema in sessions) {
      for (let keyHall in sessions[keyCinema]) {
        arrElem.push(
          <MovieSession
            hall={keyHall}
            cinema={keyCinema}
            sessions={sessions[keyCinema][keyHall]}
            key={keyHall + "" + keyCinema + ""}
          ></MovieSession>
        );
      }
    }
    if (response.data.length === 0) {
    }
    setFilm(arrElem);
  };

  useEffect(() => {
    getArrFilms(date);
    (async () => {
      let x = await filmsApi.getFilmInfo(param.id);
      setFilmInfo(x.data);
    })();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={12}>
        <img src={filmInfo.img} alt={filmInfo.img} className="MainImg" />
      </Grid>
      <Grid item md={8} xs={12} className="center">
        <Grid container>
          <Grid item md={12} xs={12} className="border">
            <p>{filmInfo.description}</p>
          </Grid>
          <Grid item className="center border" md={12} xs={12}>
            <DatePicker
              locale="ru"
              minDate={parseISO(filmInfo.dateStart)}
              maxDate={parseISO(filmInfo.dateEnd)}
              selected={date}
              onChange={(newValue) => {
                getArrFilms(newValue);
                setDate(usefullFunctions.onlyDayMonthYear(newValue));
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            {film}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InfoFilm;
