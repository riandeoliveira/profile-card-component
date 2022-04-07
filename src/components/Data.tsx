import { DataContainer, InfoName, InfoNumber } from "../styles/Data";
import { DataProps } from "../interfaces/interfaces";

const Data: React.FC<DataProps> = ({ content }): JSX.Element => {
  const { info_name, info_number } = content;

  return (
    <DataContainer>
      <InfoName>{info_name}</InfoName>
      <InfoNumber>{info_number}</InfoNumber>
    </DataContainer>
  );
};

export default Data;
