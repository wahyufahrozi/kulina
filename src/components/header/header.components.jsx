import React from "react";
import { HeaderContainer, HeaderContent } from "./header.styles";
import Modal from "react-responsive-modal";
import "./header.styles.scss";
import Street from "../../helper/street";
import { SearchBox } from "../search-box/search-box.components";
import { StreetList } from "../streetlist/street-list.components";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      searchField: "",
      data: Street
    };
  }
  onOpenModal = () => {
    this.setState({ isOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isOpen: false });
  };

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };
  render() {
    const { isOpen, data, searchField } = this.state;
    const datafilter = data.filter(item =>
      item.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <HeaderContainer>
        <i
          class="material-icons"
          style={{
            color: "#424749",
            marginTop: "16px",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          keyboard_backspace
        </i>

        <Modal open={isOpen} onClose={this.onCloseModal} center>
          <h3>
            Cek Makanan yang tersedia <br />
            di lokasi kamu !
          </h3>
          <SearchBox
            placeholder="Search Place"
            handleChange={this.handleChange}
          />
          <StreetList data={datafilter} />
        </Modal>

        <HeaderContent>
          <span>ALAMAT PENGANTARAN</span>
          <h3
            style={{ color: "black", cursor: "pointer" }}
            onClick={this.onOpenModal}
          >
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
