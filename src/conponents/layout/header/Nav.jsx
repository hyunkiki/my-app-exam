import React from "react";
import styled from "styled-components";
// import { Reset } from "styled-reset";

function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <a href="/">HTML</a>
        </li>
        <li>
          <a href="/">CSS</a>
        </li>
        <li>
          <a href="/">JS</a>
        </li>
      </ul>
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  ul {
    display: flex;
  }
  li {
    &::before {
    }
    &::after {
    }
  }
  a {
    display: block;
    padding: 30px;
    font-size: 18px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    &:hover {
      color: blue;
    }
  }
`;

export default Nav;
