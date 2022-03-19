import data from "../data/data.json";
import {
  CardContainer,
  HeaderArea,
  Circles,
  MainArea,
  ProfileContainer,
  Avatar,
  ProfileInfo,
  Name,
  Age,
  City,
  DataContainer,
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
        <ProfileContainer>
          <Avatar alt={avatar_alt} src={avatar} />
          <ProfileInfo>
            <Name>
              {user_name}
              <Age>{user_age}</Age>
            </Name>
            <City>{user_city}</City>
          </ProfileInfo>
        </ProfileContainer>
        <DataContainer>{profileData}</DataContainer>
      </MainArea>
    </CardContainer>
  );
};
