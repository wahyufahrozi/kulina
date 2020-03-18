import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectory } from "../../redux/directory/directory.selector";
import { PreviewComponentsContainer } from "./preview.styles";
import MenuItem from "../menu-item/menu-item.components";
// import CartItem from "../cart-footer/cart-footer.components";
const PreviewComponents = ({ storage }) => (
  <PreviewComponentsContainer>
    {storage.map(item => (
      <MenuItem key={item.id} item={item} />
    ))}
  </PreviewComponentsContainer>
);

const mapStateToProps = createStructuredSelector({
  storage: selectDirectory
});
export default connect(mapStateToProps)(PreviewComponents);
