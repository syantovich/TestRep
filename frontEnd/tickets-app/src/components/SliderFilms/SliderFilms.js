import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import "./SliderFilms.scss";
import Film from "../Film/Film";
import { filmsApi } from "../../api/filmsApi";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const SliderFilms = ({ type }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getMovieInfo = async () => {
      const result = await filmsApi.getAllFilms(type);
      const filmsArray = result.data.map((e) => (
        <Film
          dateStart={e.dateStart}
          dateEnd={e.dateEnd}
          key={e._id}
          img={e.img}
          name={e.name}
          id={e._id}
        />
      ));
      setFilms(filmsArray);
    };
    getMovieInfo();
  }, []);

  return (
    <div>
      <h4>{type === "now" ? "Сегодня в кино" : "Скоро в кино"}</h4>
      <Box
        sx={{
          height: 430,
          backgroundColor: "#525252",
        }}
      >
        <AliceCarousel
          className="imgSlider"
          items={films}
          autoHeight={"300px"}
          controlsStrategy="default,responsive"
          disableButtonsControls={true}
          responsive={{
            0: { items: 1 },
            10: { items: 2 },
            20: { items: 3 },
            30: { items: 4 },
            40: { items: 5 },
          }}
        />
      </Box>
    </div>
  );
};
export default SliderFilms;
