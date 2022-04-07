export interface CardContent {
  id: number;
  info_name: string;
  info_number: string;
}

export interface CardProps {
  content: JSX.Element[];
}

export interface DataProps {
  content: CardContent;
}
