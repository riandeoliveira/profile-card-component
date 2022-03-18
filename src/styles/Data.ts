import styled from "styled-components";

export const DataContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 20px;
`;

export const DataName = styled.span`
  color: var(--user-data-name-color);
  font-size: 12px;
  letter-spacing: 0.15em;
`;

export const DataNumbers = styled.span`
  color: var(--user-data-numbers-color);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
`;
