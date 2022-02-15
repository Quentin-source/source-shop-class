export interface IProps {}

export interface Sections {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

export interface IState {
  sections: Sections[];
}