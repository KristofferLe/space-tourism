import styled from "styled-components";
import TechBg from "../../images/backgrounds/bg4.png";
import colors from "../../styles/colors";

export const StyledTechPage = styled.section`
  min-height: 100vh;
  background-image: url(${TechBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 14rem 0 0 8rem;

  @media screen and (max-width: 1444px) {
    padding: 14rem 0 0 1rem;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    padding-top: 8rem;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-family: barlow;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const PageName = styled.h4`
  font-weight: 400;
`;

export const PageNumber = styled.h4`
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.3);
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 90%;
  margin-left: auto;

  @media screen and (max-width: 1444px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "img"
      "tabs"
      "text";
  }
`;

export const TabsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-area: tabs;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Tabs = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: solid 1px rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  ${({ $active }) =>
    $active &&
    `
    background-color: rgba(255, 255, 255, 1);
    color: black;
  `}
`;

export const TextContainer = styled.div`
  color: white;
  font-family: barlow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  height: 275px;
  grid-area: text;

  @media screen and (max-width: 1444px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem 0 1rem;
  }
`;

export const Verb = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-family: barlow;
  font-size: 2rem;
  font-family: bellefair, serif;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 3rem;
  font-family: bellefair, serif;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: ${colors.whiteBlue};
  width: 50%;
  line-height: 200%;
  @media screen and (max-width: 1444px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  height: 600px;
  width: 608px;
  grid-area: img;

  @media screen and (max-width: 1444px) {
    height: 400px;
    width: 408px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 357px;
    object-fit: cover;
    margin-top: 4rem;
  }
`;
