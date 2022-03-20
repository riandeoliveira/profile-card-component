import data from "../data/data.json";
import {
  CardContainer,
  HeaderArea,
  Circles,
  MainArea,
  Avatar,
  ProfileContainer,
  Name,
  Age,
  City,
  FooterArea,
} from "../styles/Card";
import circles from "../assets/images/circles.svg";
import avatar from "../assets/images/avatar.jpg";

const { circles_alt, avatar_alt, user_name, user_age, user_city } = data;

interface CardProps {
  profileData: JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ profileData }) => {
  return (
    <CardContainer>
      <HeaderArea>
        <Circles alt={circles_alt} src={circles} />
      </HeaderArea>
      <MainArea>
        <Avatar alt={avatar_alt} src={avatar} />
        <ProfileContainer>
          <Name>
            {user_name}
            <Age>{user_age}</Age>
          </Name>
          <City>{user_city}</City>
        </ProfileContainer>
      </MainArea>
      <FooterArea>{profileData}</FooterArea>
    </CardContainer>
  );
};
