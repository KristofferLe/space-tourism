import styled from "styled-components";
import CrewBg from "../../images/backgrounds/bg3.png";

export const StyledCrewPage = styled.section`
  min-height: 100vh;
  background-image: url(${CrewBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 4rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1444px) {
  }
`;

export const CrewHead = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  h5 {
    font-weight: 400;
  }

  .page-number {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 600;
  }

  @media screen and (max-width: 1444px) {
    margin-bottom: 4rem;
  }
`;

export const CrewContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 800px;
  justify-content: center;
  margin: 0 auto;
  gap: 4rem;

  @media screen and (max-width: 1444px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5rem;
  }
`;

export const CrewContent = styled.article`
  display: flex;
  justify-content: center;
  height: 700px;
  flex-direction: column;
  max-width: 550px;
  gap: 2rem;
  padding: 0 0 1rem 0;

  .rank {
    color: rgba(255, 255, 255, 0.5);
  }

  .tab-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    bottom: 2rem;

    .tab {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      border: none;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
      }

      &.active {
        background-color: white;
      }
    }
  }

  @media screen and (max-width: 1444px) {
    height: 350px;
    padding: 0;
    align-items: center;
    text-align: center;
    min-width: none;
    max-width: none;
  }

  @media screen and (max-width: 800px) {
    h4 {
      font-size: 1.6rem;
       
    }

    h3 {
      font-size: 2rem;
    }
  }
`;

export const CrewImage = styled.img`
  width: 750px;
  height: 750px;
  object-fit: cover;

  @media screen and (max-width: 1444px) {
    height: 500px;
    width: 500px;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;
