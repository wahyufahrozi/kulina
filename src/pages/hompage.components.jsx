import React from "react";
import Header from "../components/header/header.components";
import DateComponents from "../components/date/date.components";
import ButtonComponent from "../components/buttons/button.components";
import PreviewComponents from "../components/preview-components/preview-components";
import { selectCartItems } from "../redux/cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../components/cart-footer/cart-footer.components";
const Homepage = ({ cartItems }) => (
  <div>
    <Header />
    <DateComponents />
    <ButtonComponent />
    <PreviewComponents />
    {cartItems.length ? <CartItem /> : ""}
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(Homepage);
