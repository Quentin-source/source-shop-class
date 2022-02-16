import { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
  label :string;
}
export interface IState {}
