import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding-left: 4rem;
  height: 136px;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  align-items: end;
  gap: 8px;
  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const LogoContainer = styled.img`
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 1s ease;
  transform: translateX(-15px);

  &:hover {
    scale: 1.3;
    transform: translateX(-10px) rotate(360deg);
  }
`;

export const Navigation = styled.nav`
  height: 96px;
  width: 100%;
  min-width: 736px;
  max-width: 1000px;
  background-color: rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 4rem;
  gap: 4rem;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    align-self: start;
    gap: 2rem;
    padding-right: 7.5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    min-width: 254px;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    gap: 2rem;
    padding-left: 2rem;
    padding-right: 0;
    font-size: 1.5rem;
    transform: translateX(100%);
    &.active {
      transform: translateX(0);
      transition: transform 0.5s ease;
    }
  }
`;

export const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  font-family: barlow condensed;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 18px;
  border-bottom: solid 4px transparent;
  span {
    font-weight: 600;
  }
  &:hover {
    border-bottom: solid 4px rgba(255, 255, 255, 0.5);
  }
  &.active {
    border-bottom: solid 4px white;
  }
  transition: border 0.5s ease;

  @media screen and (max-width: 768px) {
    height: 19px;
    width: 100%;
    border-bottom: none;
    &:hover {
      border-bottom: none;
      border-right: solid 4px rgba(255, 255, 255, 0.5);
    }
    &.active {
      border-bottom: none;
      border-right: solid 4px white;
    }

    transition: border 0s ease;
  }
`;

export const NoLinks = styled.p`
  color: red;
  font-size: 18px;
`;

export const Line = styled.hr`
  width: 100%;
  transform: translateY(-48px) translateX(40px);
  z-index: 999;
  border: solid 1px rgba(255, 255, 255, 0.25);
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
