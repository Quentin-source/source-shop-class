//Setup
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

//Interface
import { IRootReducer, IDispatchAction } from "../../redux/reducer.interface";
import { IProps } from "./Header.interface";

//Firebase
import { auth } from "../../firebase/firebase.utils";

//Components
import CartIcon from "../Cart-icon/Cart-icon.component";
import CartDropDown from "../Cart-dropdown/Cart-dropdown.component";

//Action
import { toggleDropCart } from "../../redux/cart/cart.action";

//Assets
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

//Styles
import "./Header.styles.scss";

const Header = ({
  currentUser,
  cartStatus,
  toggleDropCart,
}: ConnectedProps<typeof connector> & IProps) => {
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
        <CartIcon onClick={toggleDropCart} />
      </div>
      {cartStatus && <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state: IRootReducer) => ({
  currentUser: state.user.currentUser,
  cartStatus: state.cart.hidden,
});

const mapDispatchToProps = (dispatch: IDispatchAction) => ({
  toggleDropCart: () => dispatch(toggleDropCart()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
