import content from "../content/card.json";
import { CardProps } from "../interfaces/interfaces";
import {
  CardContainer,
  HeaderArea,
  Circles,
  MainArea,
  Avatar,
  ProfileContainer,
  NameContainer,
  Name,
  Age,
  City,
  FooterArea,
} from "../styles/Card";
import { circles, avatar } from "../assets/media";

const { circles_alt, avatar_alt, user_name, user_age, user_city } = content;

const Card: React.FC<CardProps> = ({ content }): JSX.Element => {
  return (
    <CardContainer>
      <HeaderArea>
        <Circles alt={circles_alt} src={circles} />
      </HeaderArea>
      <MainArea>
        <Avatar alt={avatar_alt} src={avatar} />
        <ProfileContainer>
          <NameContainer>
            <Name>{user_name}</Name>
            <Age>{user_age}</Age>
          </NameContainer>
          <City>{user_city}</City>
        </ProfileContainer>
      </MainArea>
      <FooterArea>{content}</FooterArea>
    </CardContainer>
  );
};

export default Card;
