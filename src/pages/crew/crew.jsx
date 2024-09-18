import React, { useState } from "react";
import {
  StyledCrewPage,
  CrewHead,
  CrewContainer,
  CrewContent,
  CrewImage,
} from "./crewStyling";
import crewData from "./crewData";
import { H3, H4, H5, Body } from "../../styles/styled-components";

export default function CrewPage() {
  const [activeCrewIndex, setActiveCrewIndex] = useState(0);
  const activeCrew = crewData[activeCrewIndex];

  const handleCrewClick = (index) => {
    setActiveCrewIndex(index);
  };

  return (
    <StyledCrewPage>
      <CrewHead>
        <H5 className="page-number">02</H5>
        <H5>MEET YOUR CREW</H5>
      </CrewHead>
      <CrewContainer>
        <CrewContent>
          <H4 className="rank">{activeCrew.rank.toUpperCase()}</H4>
          <H3 className="name">{activeCrew.name.toUpperCase()}</H3>
          <Body className="desc">{activeCrew.desc}</Body>
          <div className="tab-container">
            {crewData.map((tab, index) => (
              <button
                key={index}
                href="#"
                onClick={() => handleCrewClick(index)}
                className={`tab ${index === activeCrewIndex ? "active" : ""}`}
              ></button>
            ))}
          </div>
        </CrewContent>
        <CrewImage src={activeCrew.image} />
      </CrewContainer>
    </StyledCrewPage>
  );
}
