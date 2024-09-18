import React, { useState } from "react";
import techData from "./techData";
import {
  StyledTechPage,
  PageHeader,
  PageName,
  PageNumber,
  ContentContainer,
  TabsContainer,
  Tabs,
  TextContainer,
  Verb,
  Title,
  Description,
  Img,
} from "./technologyStyling";

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState(1);
  const activeData = techData.find((data) => data.id === activeTab);
  const setTab = (id) => {
    setActiveTab(id);
  };

  return (
    <StyledTechPage>
      <PageHeader>
        <PageNumber>03</PageNumber>
        <PageName>SPACE LAUNCH 101</PageName>
      </PageHeader>
      <ContentContainer>
        <TabsContainer>
          <Tabs $active={activeTab === 1} onClick={() => setTab(1)}>
            1
          </Tabs>
          <Tabs $active={activeTab === 2} onClick={() => setTab(2)}>
            2
          </Tabs>
          <Tabs $active={activeTab === 3} onClick={() => setTab(3)}>
            3
          </Tabs>
        </TabsContainer>
        <TextContainer>
          <Verb>THE TERMINOLOGY...</Verb>
          <Title>{activeData.title}</Title>
          <Description>{activeData.description}</Description>
        </TextContainer>
        <Img src={activeData.img} />
      </ContentContainer>
    </StyledTechPage>
  );
}
