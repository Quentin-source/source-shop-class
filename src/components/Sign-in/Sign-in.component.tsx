//Setup
import React from 'react';

//Interfaces
import { IState, IProps } from './Sign-in.interface';

//Components
import FormInput from '../Form-input/Form-input.component';

export default class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}
