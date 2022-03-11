import React, { useState } from "react";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import "./MovieSession.scss";

const MovieSession = ({ cinema, sessions, hall }) => {
  const [sessionsEl, setSessionsEl] = useState(
    sessions
      ? sessions.map((e) => (
          <Button variant="contained" key={e._id} className="sessions">
            {e.timeStart}
          </Button>
        ))
      : null
  );
  return (
    <Grid
      item
      key={hall + "" + cinema + ""}
      item
      md={12}
      xs={12}
      className="border"
    >
      <span className="cinemaName">{cinema}</span>
      <span className="hallName">{hall}</span>
      <span>{sessionsEl}</span>
    </Grid>
  );
};

export default MovieSession;
