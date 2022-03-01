import React from "react";
import "./MainPage.scss";
import { Stack } from "@mui/material";
import SliderFilms from "../../components/SliderFilms/SliderFilms";

const MainPage = () => {
  return (
    <Stack spacing={1} className="mainPage">
      <SliderFilms type="now" />
      <SliderFilms type="soon" />
    </Stack>
  );
};

export default MainPage;
