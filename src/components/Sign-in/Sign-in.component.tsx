//Setup
import React from 'react';

//Interfaces
import { IState, IProps } from './Sign-in.interface';

//Components
import FormInput from '../Form-input/Form-input.component';

//Firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

//Styles
import './Sign-in.styles.scss';
import CustomButton from '../Custom-button/Custom-button.component';

export default class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<IState, keyof IState>);
  };

  render(): React.ReactNode {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
