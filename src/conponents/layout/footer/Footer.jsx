import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <h1>HYUNKI</h1>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
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
export default Footer;
