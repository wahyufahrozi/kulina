import React from "react";

import {
  MenutItemContainer,
  TitleContainer,
  Author,
  ItemFoorterContainer,
  PriceContainer,
  BackgroundImageContainer,
  Buttonitem
} from "./menu-item.styles";

const MenutItem = ({ item, addItem }) => {
  const { title, image, price, author } = item;
  return (
    <MenutItemContainer>
      <BackgroundImageContainer image={image} />
      <TitleContainer>{title}</TitleContainer>
      <Author>{author}</Author>
      <ItemFoorterContainer>
        <PriceContainer>Rp.{price}</PriceContainer>
        <Buttonitem>
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

export default MenutItem;
