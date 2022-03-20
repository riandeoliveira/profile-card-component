import { DataContainer, DataName, DataNumbers } from "../styles/Data";

interface DataProps {
  name: string;
  numbers: string;
}

export const Data: React.FC<DataProps> = ({ name, numbers }) => {
  return (
    
    <DataContainer>
      <DataName>{name}</DataName>
      <DataNumbers>{numbers}</DataNumbers>
    </DataContainer>
  );
};
