import { DataName, DataNumbers, DataContent } from "../styles/Data";

interface DataProps {
  name: string;
  numbers: string;
}

export const Data: React.FC<DataProps> = ({ name, numbers }) => {
  return (
    <DataContent>
      <DataName>{name}</DataName>
      <DataNumbers>{numbers}</DataNumbers>
    </DataContent>
  );
};
