import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmsApi } from "../../api/filmsApi";
import { Grid } from "@mui/material";
import Film from "../../components/Film/Film";
import "./Category.scss";
import { Pagination } from "@mui/material";

const Category = (props) => {
  const param = useParams();
  const [category, setCategory] = useState("");
  const [films, setFilms] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [allpage, setAllPage] = useState(1);
  const filmsFunc = async (page) => {
    let sortFilms = await filmsApi.getFilmsCategory(param.category, page);
    console.log(category);
    console.log(sortFilms);
    setAllPage(sortFilms.data.maxPage);
    sortFilms = sortFilms.data.skipedArr.map((e) => {
      return (
        <Grid item xs={3} md={3}>
          <Film
            dateStart={e.dateStart}
            dateEnd={e.dateEnd}
            key={e.name}
            img={e.img}
            name={e.name}
          />
        </Grid>
      );
    });
    setCategory(param.category);
    setFilms(sortFilms);
  };
  useEffect(() => {
    console.log(category + " Category");
    console.log(param.category + " Params");
    if (category !== param.category) {
      filmsFunc(numPage);
    }
  });

  return (
    <>
      <h4>1</h4>
      <Grid container spacing={2}>
        {films}
      </Grid>
      {films.length !== 0 ? (
        <Pagination
          count={allpage}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => {
            setNumPage(page);
            filmsFunc(page);
            console.log(page);
          }}
        />
      ) : (
        false
      )}
    </>
  );
};

export default Category;
