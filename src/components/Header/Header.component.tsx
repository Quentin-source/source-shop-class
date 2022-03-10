//Setup
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

//Interface
import { IRootReducer } from "../../redux/reducer.interface";
import { FC } from "react";

//Firebase
import { auth } from "../../firebase/firebase.utils";

//Components
import CartIcon from "../Cart-icon/Cart-icon.component";
import CartDropDown from "../Cart-dropdown/Cart-dropdown.component";

//Assets
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

//Styles
import "./Header.styles.scss";

const Header: FC<ConnectedProps<typeof connector>> = ({
  currentUser,
  cartStatus,
}) => {
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
      {cartStatus && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { cartStatus },
}: IRootReducer) => ({
  currentUser,
  cartStatus,
});

const connector = connect(mapStateToProps);

export default connector(Header);
