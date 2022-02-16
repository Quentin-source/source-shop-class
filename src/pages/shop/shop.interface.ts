export interface IProps {}

export type IState = {
  id: number;
  title: string;
  routeName: string;
  items: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}[];
