import React from "react";
import Header from "./conponents/layout/header/Header";
import Articile from "./conponents/layout/Article";
import Footer from "./conponents/layout/footer/Footer";
import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="active">
          <Articile />
          <Articile />
          <Articile />
        </MainStyle>
        <Footer />
      </div>
    </>
  );
}

const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  margin: 20px auto 20px;
  height: 743px;
  article {
    width: 30%;
  }
  &.active {
    /* background: blue; */
  }
`;

export default App;
