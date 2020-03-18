import React from "react";

import { ButtonContainer, Button } from "./button.styles.jsx";
class ButtonComponent extends React.Component {
  state = {
    button: false
  };
  primary = () => {
    this.setState({
      button: !this.state.button
    });
  };
  render() {
    return (
      <ButtonContainer>
        {this.state.button === false ? (
          <Button onClick={this.primary} primary>
            Lunch
          </Button>
        ) : (
          <Button onClick={this.primary}>Lunch</Button>
        )}
        {this.state.button === true ? (
          <Button primary>Dinner</Button>
        ) : (
          <Button onClick={this.primary}>Dinner</Button>
        )}
      </ButtonContainer>
    );
  }
}

export default ButtonComponent;
