import React from "react";
import { HeaderContainer, HeaderContent } from "./header.styles";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <i class="material-icons" style={{ color: "#424749" }}>
          keyboard_backspace
        </i>
        <HeaderContent>
          <span>ALAMAT PENGANTARAN</span>
          <h3 style={{ color: "black" }}>
            TOKOPEDIA TOWER
            <i
              class="material-icons"
              style={{ position: "absolute", color: "#f9423a" }}
            >
              keyboard_arrow_down
            </i>
          </h3>
        </HeaderContent>
        <br />
      </HeaderContainer>
    );
  }
}

export default Header;
