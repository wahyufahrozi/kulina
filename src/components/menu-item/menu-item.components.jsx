import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  MenutItemContainer,
  TitleContainer,
  Author,
  ItemFoorterContainer,
  PriceContainer,
  BackgroundImageContainer,
  Buttonitem
} from "./menu-item.styles";
// import "./menu-styles.scss";
const MenutItem = ({ item, addItem }) => {
  const { title, image, price, author } = item;
  return (
    <MenutItemContainer>
      <BackgroundImageContainer image={image} />
      <TitleContainer>{title}</TitleContainer>
      <Author>{author}</Author>
      <ItemFoorterContainer>
        <PriceContainer>Rp.{price}</PriceContainer>
        <Buttonitem onClick={() => addItem(item)}>
          ADD
          <i
            class="material-icons"
            style={{ position: "relative", fontSize: "18px" }}
          >
            add
          </i>
        </Buttonitem>
      </ItemFoorterContainer>
    </MenutItemContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(MenutItem);
