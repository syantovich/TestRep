import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { Fragment } from "react";

const App = (props) => {
  return (
    <Fragment>
      <Header />
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
};

export default App;
