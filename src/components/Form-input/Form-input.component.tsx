//Setup
import { FC } from 'react';

//Interfaces
import { IProps } from './Form-input.interface';

//Styles
import './Form-input.styles.scss';

const FormInput: FC<IProps> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label && (
        <label className={`${otherProps.value && 'shrink'} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
