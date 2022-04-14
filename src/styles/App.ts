import styled from "styled-components";
import theme from "./theme/theme.json";

export const AppBox = styled.div`
  border-radius: 20px;
  box-shadow: 0px 30px 30px ${theme.colors.cod_gray};
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;

  header {
    display: flex;

    img {
      border-radius: 20px 20px 0 0;
      width: 100%;
    }
  }

  main {
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.dusty_gray};
    display: flex;
    flex-direction: column;

    img {
      animation: slide-in 1s;
      border-radius: 50%;
      border: 5px solid ${theme.colors.white};
      left: 0;
      margin: -52px auto;
      position: absolute;
      right: 0;
      text-align: center;
    }

    div {
      animation: fade-in 1s 0.5s forwards;
      margin: 75px 0 25px;
      opacity: 0;

      h1 {
        color: ${theme.colors.ebony_clay};
        font-size: 18px;
        margin-bottom: 6px;

        span {
          color: ${theme.colors.storm_gray};
          font-weight: 400;
        }
      }

      span {
        color: ${theme.colors.storm_gray};
        font-size: 14px;
      }
    }
  }

  footer {
    background-color: ${theme.colors.white};
    border-radius: 0 0 20px 20px;
    display: flex;
    justify-content: center;

    div {
      animation: fade-in 1s 0.5s forwards, increase 1s;
      display: flex;
      flex-direction: column-reverse;
      margin: 20px;
      opacity: 0;
    }
  }
`;

export const Name = styled.span`
  color: ${theme.colors.storm_gray};
  font-size: 12px;
  letter-spacing: 0.15em;
`;

export const Total = styled.span`
  color: ${theme.colors.ebony_clay};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
`;
