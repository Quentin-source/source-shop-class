import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { IProps } from "./Cart-icon.interface";

import "./Cart-icon.styles.scss";

const CartIcon : FC<IProps> = (props : IProps) => {
  return (
    <div onClick={props.onClick} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};


export default CartIcon;