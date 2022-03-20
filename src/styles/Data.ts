import styled from "styled-components";

export const DataContainer = styled.div`
  animation: fade-in 1s 0.5s forwards, increase 1s;
  display: flex;
  flex-direction: column-reverse;
  margin: 20px;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes increase {
    from {
      height: 0px;
    }

    to {
      height: 44.2px;
    }
  } ;
`;

export const DataName = styled.span`
  color: var(--text);
  font-size: 12px;
  letter-spacing: 0.15em;
`;

export const DataNumbers = styled.span`
  color: var(--strong-text);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
`;
