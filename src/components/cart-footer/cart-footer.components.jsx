import React from "react";

import { connect } from "react-redux";
import {
  selectCartItemsCount,
  selectCartTotal
} from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  CartContainer,
  CartContent,
  SubContent,
  IconContent,
  IconContainer
} from "./cart-footer.styles";

const CartItem = ({ itemCount, total }) => (
  <CartContainer>
    <CartContent>
      {itemCount} Items|Rp. {total}
    </CartContent>
    <IconContainer>
      <SubContent>Termasuk ongkos kirim</SubContent>
      <IconContent>
        <i
          class="material-icons"
          style={{ fontSize: "20px", marginTop: "-10px" }}
        >
          shopping_cart
        </i>
      </IconContent>
      <IconContent>
        <i
          class="material-icons"
          style={{ fontSize: "20px", marginTop: "-10px" }}
        >
          chevron_right
        </i>
      </IconContent>
    </IconContainer>
  </CartContainer>
);
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CartItem);
