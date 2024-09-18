import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import colors from "../../styles/colors";

const StyledHamburger = styled.span`
  display: grid;
  gap: 0.5rem;
  position: fixed;
  right: 1rem;
  top: 2.5rem;
  cursor: pointer;
  z-index: 999;

  .bar {
    width: 2rem;
    height: 3px;
    background-color: ${colors.whiteBlue};
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg) translate(8px, 6px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg) translate(9px, -8px)" : "none"};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Hamburger({ onClick }) {
  const menuOpen = useSelector((state) => state.MenuOpenSlice.open); // Adjust the selector

  return (
    <StyledHamburger onClick={onClick} menuOpen={menuOpen}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  );
}
