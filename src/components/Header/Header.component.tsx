//Setup
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Interface
import { IRootReducer } from "../../redux/reducer.interface";
import { IProps } from "./Header.interface";

//Firebase
import { auth } from "../../firebase/firebase.utils";

//Components
import CartIcon from "../Cart-icon/Cart-icon.component";

//Assets
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

//Styles
import "./Header.styles.scss";

const Header = ({ currentUser }: IProps) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
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
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootReducer) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
