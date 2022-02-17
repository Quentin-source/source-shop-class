//Setup
import { FC } from 'react';

//Interface
import { IProps } from './Custom-button.interface';

//Styles
import './Custom-button.styles.scss';

const CustomButton: FC<IProps> = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn && 'google-sign-in'} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
