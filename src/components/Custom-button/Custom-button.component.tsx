//Setup
import { FC } from 'react';

//Interface
import { IProps } from './Custom-button.interface';

//Styles
import './Custom-button.styles.scss';

const CustomButton: FC<IProps> = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
