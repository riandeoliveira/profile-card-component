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

export const Circles = styled.img`
  border-radius: 20px 20px 0 0;
  width: 100%;
`;

export const MainArea = styled.main`
  background-color: var(--card);
  border-bottom: 1px solid var(--data-border);
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  animation: slide-in 1s;
  border-radius: 50%;
  border: 5px solid var(--card);
  left: 0;
  margin: -52px auto;
  position: absolute;
  right: 0;
  text-align: center;

  @keyframes slide-in {
    from {
      margin-top: 24px;
    }

    to {
      margin-top: -52px;
    }
  } ;
`;

export const ProfileContainer = styled.div`
  animation: fade-in 1s 0.5s forwards;
  margin: 75px 0 25px;
  opacity: 0;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  } ;
`;

export const NameContainer = styled.h1`
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Name = styled.span`
  color: var(--strong-text);
`;

export const Age = styled.span`
  color: var(--text);
  font-weight: 400;
  margin-left: 5px;
`;

export const City = styled.span`
  color: var(--text);
  font-size: 14px;
`;

export const FooterArea = styled.footer`
  background-color: var(--card);
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: center;
`;
