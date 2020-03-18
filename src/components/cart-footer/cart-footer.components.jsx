import React from "react";

import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { cartContainer } from "./cart-footer.styles";

const CartItem = itemCount => <cartContainer></cartContainer>;

export default CartItem;
