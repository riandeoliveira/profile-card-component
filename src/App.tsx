import data from "./data/data.json";
import { Card } from "./components/Card";
import { Data } from "./components/Data";

const { content_name, content_numbers } = data;

export const App: React.FC = () => {
  const handleProfileData = content_name.map((item, i) => (
    <Data key={i} name={content_name[i]} numbers={content_numbers[i]} />
  ));

  return <Card profileData={handleProfileData} />;
};
