import styled from "styled-components";

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

export const ProfileContainer = styled.div``;

export const Avatar = styled.img`
  border: 5px solid var(--main);
  border-radius: 50%;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: -52px;
  position: absolute;
  right: 0;
  text-align: center;
`;

export const ProfileInfo = styled.div`
  margin: 75px 0 25px 0;
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
  border-top: 1px solid var(--data-border);
  display: flex;
  justify-content: center;
`;
