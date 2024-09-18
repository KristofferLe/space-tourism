import React from "react";
import {
  StyledHomePage,
  HomeContainer,
  HomeText,
  ExploreBtn,
  ExploreBtnBorder,
} from "./homeStyling";
import { useNavigate } from "react-router-dom";
import { H1, H4, Body, CondensedBody } from "../../styles/styled-components";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/destination");
  };
  return (
    <StyledHomePage>
      <HomeContainer>
        <HomeText>
          <CondensedBody className="so">
            SO, YOU WANT TO TRAVEL TO
          </CondensedBody>
          <H1>SPACE</H1>
          <Body>
            Let’s face it; if you want to go to space, you might as well
            genuinely go <br /> to outer space and not hover kind of on the edge
            of it. Well sit back, <br /> and relax because we’ll give you a
            truly out of this world experience!
          </Body>
        </HomeText>
        <ExploreBtnBorder>
          <ExploreBtn
            onClick={handleClick}
            aria-label="link to the destination page"
            tabIndex={0}
          >
            <H4>EXPLORE</H4>
          </ExploreBtn>
        </ExploreBtnBorder>
      </HomeContainer>
    </StyledHomePage>
  );
}
