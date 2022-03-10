import { FC } from "react";

import { IDispatchAction } from "../../redux/reducer.interface";
import { connect, ConnectedProps } from "react-redux";

import { toggleDropCart } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

import "./Cart-icon.styles.scss";

const CartIcon: FC<ConnectedProps<typeof connector>> = ({ toggleDropCart }) => {
  return (
    <div onClick={toggleDropCart} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: IDispatchAction) => ({
  toggleDropCart: () => dispatch(toggleDropCart()),
});

const connector = connect(null, mapDispatchToProps);

export default connector(CartIcon);
