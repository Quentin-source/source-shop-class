export interface IProps {}

export interface IState {
  shop : {
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
}
