import content from "./content/data.json";
import { CardContent } from "./interfaces/interfaces";
import Data from "./components/Data";
import Card from "./components/Card";

const { data_content } = content;

const App: React.FC = (): JSX.Element => {
  const setCardContent = (item: CardContent): CardContent => {
    const cardContent: CardContent = {
      id: item.id,
      info_name: item.info_name,
      info_number: item.info_number,
    };

    return cardContent;
  };

  const data = data_content.map((item, i) => (
    <Data content={setCardContent(item)} key={i} />
  ));

  return <Card content={data} />;
};

export default App;
