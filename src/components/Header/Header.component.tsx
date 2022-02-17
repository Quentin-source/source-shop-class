//Setup
import { Link } from 'react-router-dom';

//Firevase
import { auth } from '../../firebase/firebase.utils';

//Assets
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

//Styles
import './Header.styles.scss';

const Header = ({ currentUser }: any) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign">
            SIGN IN
          </Link>
        )}
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
