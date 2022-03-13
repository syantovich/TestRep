import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
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
    usefullFunctions.onlyDayMonthYear(Date.now(), true)
  );
  const [filmInfo, setFilmInfo] = useState({});
  const [showSession, setShowSession] = useState({});
  const [isShowSession, setIsShowSession] = useState(false);
  const [seats, setSeats] = useState(false);
  const param = useParams();

  const getArrFilms = async (newDate) => {
    let response = await filmsApi.getMovie(param.id, newDate);
    const sessions = {};

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
    let arrElem = [<MovieSession halls={false} key="header"></MovieSession>];
    for (let keyCinema in sessions) {
      arrElem.push(
        <MovieSession
          cbSetShowSession={(newValue) => {
            setShowSession(newValue);
            setIsShowSession(true);
          }}
          cinema={keyCinema}
          halls={sessions[keyCinema]}
          key={keyCinema}
        ></MovieSession>
      );
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
  }, [date]);
  useEffect(() => {
    if (isShowSession) {
      let arr = showSession.places.map((e, i) => {
        let rowArr = e.map((eRow, iRow) => (
          <div
            key={"column" + i + "row" + iRow}
            className={
              "seat " + showSession.hall.places[i][iRow] + " type" + eRow
            }
          />
        ));
        return (
          <>
            <Stack
              key={"row" + i}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <span className="row">{i + 1}</span>
              {rowArr}
              <span className="row">{i + 1}</span>
            </Stack>{" "}
          </>
        );
      });
      arr = (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {arr}
        </Stack>
      );
      setSeats(arr);
    } else {
      setSeats(false);
    }
  }, [isShowSession]);
  return (
    <>
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
                  setDate(usefullFunctions.onlyDayMonthYear(newValue, true));
                }}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              {film}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {isShowSession && (
        <div className="showSession_wrapper center">
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            className="showSession"
          >
            <span
              className="close"
              onClick={() => {
                setShowSession({});
                setIsShowSession(false);
              }}
            >
              ✕
            </span>
            <span className="infoSession">
              <div className="nameFilm">{showSession.info.name}</div>
              <div className="dateSession">
                {usefullFunctions.onlyDayMonthYear(showSession.date, false)}
              </div>
              <div className="nameCinemaHall">
                {showSession.cinema.name + " - " + showSession.hall.name}
              </div>
            </span>
            <div className="seats">
              <div className="seats_border">{seats}</div>
            </div>
          </Stack>
        </div>
      )}
    </>
  );
};
export default InfoFilm;
