import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <HeaderStyle>
      <h1>HYUNKI</h1>
      <Nav />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: lightgray;
  h1 {
    padding: 30px;
    font-size: 30px;
    font-weight: 700;
  }
`;
export default Header;
