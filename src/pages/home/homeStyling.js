import styled from "styled-components";
import HomeBg from "../../images/backgrounds/bg1.png";
import HomeBgSm from "../../images/backgrounds/bg1sm.png";
import colors from "../../styles/colors";

export const StyledHomePage = styled.section`
  min-height: 100vh;
  width: 100%;
  padding-top: 9rem;
  background-image: url(${HomeBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    background-image: url(${HomeBgSm});
  }
`;

export const HomeContainer = styled.section`
  min-height: 950px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 4rem;
    padding: 1rem;
    min-height: 1050px;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-around;
    padding: 0;
  }
`;

export const HomeText = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;

  .so {
    font-size: 26px;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

export const ExploreBtnBorder = styled.span`
  display: grid;
  place-items: center;
  min-height: 420px;
  width: 420px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  transition: background-color 0.5s ease;
`;

export const ExploreBtn = styled.span`
  background-color: white;
  min-height: 272px;
  min-width: 272px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  user-select: none;
  cursor: pointer;

  h4 {
    color: black;
    font-weight: 300;
  }

  &:hover {
    h4 {
      color: gray;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 200px;
    min-width: 200px;
  }
`;
