//Component
import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/Sign-up/Sign-up.component';

//Styles
import './signpage.styles.scss';

const signpage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signpage;
