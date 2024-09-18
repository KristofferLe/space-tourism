import styled from "styled-components";
import DestinationBg from "../../images/backgrounds/bg2.png";
import colors from "../../styles/colors";

export const StyledDestinationPage = styled.section`
  min-height: 100vh;
  background-image: url(${DestinationBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 9rem 4rem 0 4rem;

  @media screen and (max-width: 1024px) {
    padding: 9rem 0 0 0;
  }
`;

export const DestinationContainer = styled.section`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

export const DestinationHead = styled.span`
  display: flex;
  gap: 1rem;
  h5 {
    font-weight: 500;
  }

  .page-number {
    color: rgba(255, 255, 255, 0.3);
  }

  @media screen and (max-width: 1024px) {
    min-width: none;
    margin: 0 auto;
  }
`;

export const DestinationContentContainer = styled.article`
  min-height: 734px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const DestinationImage = styled.img`
  height: 750px;
  width: 750px;
  object-fit: cover;
  margin: 0 auto;

  @media screen and (max-width: 1444px) {
    height: 500px;
    width: 500px;
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
`;

export const DestinationInfo = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 3rem;

  .planet-tabs {
    display: flex;
    gap: 2rem;
    list-style: none;
    a {
      color: ${colors.whiteBlue};
      font-size: 20px;
      font-weight: 400;
      text-decoration: none;
      font-family: Barlow Condensed, system-ui;
      letter-spacing: 1.5px;

      &:hover {
        color: ${colors.white};
        border-bottom: solid 3px ${colors.white};
        padding: 0.5rem 0 0.5rem 0;
      }
      transition: all 0.3s ease-in-out;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .desc {
      line-height: 180%;
      font-size: 18px;
    }
  }

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .travel-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    small {
      color: ${colors.whiteBlue};
    }
    p {
      font-weight: 300;
      font-family: bellefair;
      font-size: 2rem;
      color: ${colors.white};
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    h1 {
      font-size: 5rem;
    }

    .planet-tabs {
      margin: 0 auto;
    }

    .travel-info {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
