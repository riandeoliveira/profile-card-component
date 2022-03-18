import styled from "styled-components";
import { fadeIn, slideIn, increase } from "./animations/animations";

export const CardContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0px 20px 80px var(--card-shadow);
  display: flex;
  flex-direction: column;
  margin: 20px;
  text-align: center;
`;

export const HeaderArea = styled.header`
  display: flex;
`;

export const HeaderImage = styled.img`
  border-radius: 20px 20px 0 0;
  width: 100%;
`;

export const MainArea = styled.main`
  background-color: var(--main);
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  border-bottom: 1px solid var(--data-border);
`;

export const Avatar = styled.img`
  animation: slide-in 1s;
  border: 5px solid var(--main);
  border-radius: 50%;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: -52px;
  position: absolute;
  right: 0;
  text-align: center;

  ${slideIn}
`;

export const ProfileInfo = styled.div`
  animation: fade-in 1s 0.5s forwards;
  opacity: 0;
  margin: 75px 0 25px 0;

  ${fadeIn}
`;

export const Name = styled.h1`
  color: var(--strong-text);
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Age = styled.span`
  margin-left: 5px;
  color: var(--text);
  font-weight: 400;
`;

export const City = styled.span`
  color: var(--text);
  font-size: 14px;
`;

export const DataContainer = styled.div`
  animation: fade-in 1s 0.5s forwards, increase 1s;
  display: flex;
  opacity: 0;
  justify-content: center;

  ${fadeIn}
  ${increase}
`;
