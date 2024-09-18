import React, { useState } from "react";
import {
  StyledDestinationPage,
  DestinationContainer,
  DestinationHead,
  DestinationContentContainer,
  DestinationImage,
  DestinationInfo,
} from "./destinationStyling";
import { Link } from "react-router-dom";
import { planetData } from "./planetData";
import {
  H1,
  H5,
  CondensedBody,
  Body,
  Small,
} from "../../styles/styled-components";

export default function DestinationPage() {
  const [planet, setPlanet] = useState("Moon"); // Default to Moon
  const activePlanetData = planetData.find((p) => p.name === planet);

  return (
    <StyledDestinationPage>
      <DestinationContainer>
        <DestinationHead>
          <H5 className="page-number">01</H5>
          <H5>PICK YOUR DESTINATION</H5>
        </DestinationHead>
        <DestinationContentContainer>
          {activePlanetData && (
            <>
              <DestinationImage src={activePlanetData.src} />
              <DestinationInfo>
                <ul className="planet-tabs">
                  {planetData.map((p) => (
                    <li key={p.name}>
                      <Link to={p.path} onClick={() => setPlanet(p.name)}>
                        {p.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="information">
                  <H1>{activePlanetData.name.toUpperCase()}</H1>
                  <CondensedBody className="desc">
                    {activePlanetData.description}
                  </CondensedBody>
                </div>
                <hr />
                <div className="travel-info">
                  <span className="distance">
                    <Small>AVG. DISTANCE</Small>
                    <Body>{activePlanetData.distance}</Body>
                  </span>
                  <span className="time">
                    <Small>EST. TRAVEL TIME</Small>
                    <Body>{activePlanetData.travel.toUpperCase()}</Body>
                  </span>
                </div>
              </DestinationInfo>
            </>
          )}
        </DestinationContentContainer>
      </DestinationContainer>
    </StyledDestinationPage>
  );
}
