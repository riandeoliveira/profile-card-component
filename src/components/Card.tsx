import data from "../data/data.json";
import {
  CardContainer,
  HeaderArea,
  HeaderImage,
  MainArea,
  ProfileContainer,
  Avatar,
  ProfileInfo,
  Name,
  Age,
  City,
  DataContainer,
} from "../styles/Card";
import background from "../assets/images/bg-pattern-card.svg";
import avatar from "../assets/images/avatar.jpg";

const { user_name, user_age, user_city } = data;

interface CardProps {
  profileData: JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ profileData }) => {
  return (
    <CardContainer>
      <HeaderArea>
        <HeaderImage
          alt="Card header. With little cyan blue circles"
          src={background}
        />
      </HeaderArea>
      <MainArea>
        <ProfileContainer>
          <Avatar alt="User profile avatar" src={avatar} />
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
