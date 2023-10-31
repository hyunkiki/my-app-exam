import React from "react";
import styled from "styled-components";

function Articile() {
  return (
    <ArticleStyle>
      <h2>타이틀</h2>
      Hello, React!
    </ArticleStyle>
  );
}

const ArticleStyle = styled.article`
  padding: 2rem;
  border: 1px solid #eee;
  box-sizing: border-box;
  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
export default Articile;
