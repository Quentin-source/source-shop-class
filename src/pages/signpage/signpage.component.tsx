//Component
import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/Sign-up/Sign-up.component';

const signpage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h1>SIGN IN</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signpage;
