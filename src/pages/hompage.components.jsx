import React from "react";
import Header from "../components/header/header.components";
import ButtonComponent from "../components/buttons/button.components";
import PreviewComponents from "../components/preview-components/preview-components";
import CartItem from "../components/cart-footer/cart-footer.components";
const Homepage = () => (
  <div>
    <Header />
    <ButtonComponent />
    <PreviewComponents />
    <CartItem />
  </div>
);

export default Homepage;
