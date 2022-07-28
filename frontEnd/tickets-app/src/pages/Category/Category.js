import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmsApi } from "../../api/filmsApi";
import Film from "../../components/Film/Film";
import "./Category.scss";
import { Pagination, Grid } from "@mui/material";

const Category = () => {
  const param = useParams();
  const [category, setCategory] = useState("");
  const [films, setFilms] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [allpage, setAllPage] = useState(1);
  const filmsFunc = async (page) => {
    let sortFilms = await filmsApi.getFilmsCategory(param.category, page);
    setAllPage(sortFilms.data.maxPage);
    sortFilms = sortFilms.data.skipedArr.map((e) => {
      return (
        <Grid item xs={3} md={3} key={e._id} className="item_category">
          <Film
            dateStart={e.dateStart}
            dateEnd={e.dateEnd}
            key={e._id}
            img={e.img}
            name={e.name}
            id={e._id}
          />
        </Grid>
      );
    });
    setCategory(param.category);
    setFilms(sortFilms);
  };
  useEffect(() => {
    if (category !== param.category) {
      filmsFunc(numPage);
    }
  }, [param.category]);

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
          }}
        />
      ) : (
        false
      )}
    </>
  );
};

export default Category;
