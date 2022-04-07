import styled from "styled-components";
import theme from "./theme/theme.json";

export const DataContainer = styled.div`
  animation: fade-in 1s 0.5s forwards, increase 1s;
  display: flex;
  flex-direction: column-reverse;
  margin: 20px;
  opacity: 0;
`;

export const InfoName = styled.span`
  color: ${theme.colors.storm_gray};
  font-size: 12px;
  letter-spacing: 0.15em;
`;

export const InfoNumber = styled.span`
  color: ${theme.colors.ebony_clay};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
`;
