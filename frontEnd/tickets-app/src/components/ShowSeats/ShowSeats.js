import React from "react";
import { Stack } from "@mui/material";
import { usefullFunctions } from "../../usefullFunction/usefullFunctions";

const ShowSeats = ({
  showSession,
  setShowSession,
  setIsShowSession,
  seats,
  socket,
}) => {
  return (
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
            socket.close();
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
  );
};
export default ShowSeats;
