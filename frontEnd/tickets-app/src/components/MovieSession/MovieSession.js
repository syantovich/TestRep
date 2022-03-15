import React, { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid } from "@mui/material";
import "./MovieSession.scss";
import { filmsApi } from "../../api/filmsApi";

const MovieSession = ({ cinema, halls, cbSetShowSession }) => {
  const [hallsEl, setHallsEl] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (halls !== false) {
      let arrHallsEl = [];
      let firsttime = true;
      for (let hall in halls) {
        let arrButSessions = halls[hall].map((e) => (
          <LoadingButton
            variant="contained"
            key={e._id + "" + e.session._id}
            className="sessions"
            onClick={async () => {
              setLoading(true);
              let response = await filmsApi.getSessionInfo(e._id);
              console.log(response);
              cbSetShowSession(response.data);
              setLoading(false);
            }}
            loading={loading}
          >
            {e.session.timeStart}
          </LoadingButton>
        ));
        arrHallsEl.push(
          <Grid
            item
            key={hall + "" + cinema + ""}
            md={12}
            xs={12}
            className="border flex-left"
          >
            <div className="cinemaName">{firsttime && cinema}</div>
            <span className="hallName">{hall}</span>
            <span>{arrButSessions}</span>
          </Grid>
        );
        firsttime = false;
        setHallsEl(arrHallsEl);
      }
    } else {
      setHallsEl(
        <Grid item key="header" md={12} xs={12} className="border flex-left">
          <div className="cinemaName">Кинотеатр</div>
          <span className="hallName">Зал</span>
        </Grid>
      );
    }
  }, []);
  return hallsEl;
};

export default MovieSession;
