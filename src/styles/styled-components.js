import styled, { css } from "styled-components";
import colors from "./colors";

const Bellefair = css`
  font-family: Bellefair, system-ui;
`;

const Barlow = css`
  font-family: Barlow, system-ui;
`;

const BarlowCondensed = css`
  font-family: Barlow Condensed, system-ui;
`;

const WhiteBlue = css`
  color: ${colors.whiteBlue};
`;

const White = css`
  color: ${colors.white};
`;

export const H1 = styled.h1`
  ${Bellefair};
  ${White}
  font-weight: 500;
  font-size: 144px;
`;

export const H2 = styled.h2`
  ${Bellefair};
  ${White}
  font-size: 100px;
`;

export const H3 = styled.h3`
  ${Bellefair};
  ${White}
  font-size: 56px;
  font-weight: 500;
`;

export const H4 = styled.h4`
  ${Bellefair};
  ${White}
  font-size: 32px;
  font-weight: 500;
`;

export const H5 = styled.h5`
  ${BarlowCondensed}
  ${White}
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 4px;
`;

export const H6 = styled.h6`
  ${Bellefair};
  ${White}
  font-size: 28px;
`;

export const Small = styled.small`
  ${BarlowCondensed};
  font-size: 14px;
  letter-spacing: 2px;
`;

export const CondensedBody = styled.p`
  ${BarlowCondensed};
  ${WhiteBlue};
  font-size: 16px;
  letter-spacing: 2px;
`;

export const Body = styled.p`
  ${Barlow};
  ${WhiteBlue}
  font-size: 16px;
  line-height: 180%;
`;
