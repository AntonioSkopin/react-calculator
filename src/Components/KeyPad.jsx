import React from "react";

class KeyPad extends React.Component {
  // Gets the name of the button which is pressed
  buttonPressed = (e) => {
    this.props.buttonPressed(e.target.name);
  };

  render() {
    return (
      <div className="buttons">
        <button name="(" onClick={this.buttonPressed}>
          (
        </button>
        <button id="reset" name="C" onClick={this.buttonPressed}>
          C
        </button>
        <button id="backspace" name="CE" onClick={this.buttonPressed}>
          CE
        </button>
        <button name=")" onClick={this.buttonPressed}>
          )
        </button>
        <button name="1" onClick={this.buttonPressed}>
          1
        </button>
        <button name="2" onClick={this.buttonPressed}>
          2
        </button>
        <button name="3" onClick={this.buttonPressed}>
          3
        </button>
        <button id="modes" name="+" onClick={this.buttonPressed}>
          +
        </button>
        <button name="4" onClick={this.buttonPressed}>
          4
        </button>
        <button name="5" onClick={this.buttonPressed}>
          5
        </button>
        <button name="6" onClick={this.buttonPressed}>
          6
        </button>
        <button id="modes" name="-" onClick={this.buttonPressed}>
          -
        </button>
        <button name="7" onClick={this.buttonPressed}>
          7
        </button>
        <button name="8" onClick={this.buttonPressed}>
          8
        </button>
        <button name="9" onClick={this.buttonPressed}>
          9
        </button>
        <button id="modes" name="*" onClick={this.buttonPressed}>
          *
        </button>
        <button id="zero" name="0" onClick={this.buttonPressed}>
          0
        </button>
        <button name="." onClick={this.buttonPressed}>
          .
        </button>
        <button id="bttn" name="=" onClick={this.buttonPressed}>
          =
        </button>
        <button id="modes" name="/" onClick={this.buttonPressed}>
          /
        </button>
        <button id="modes" name="x²" onClick={this.buttonPressed}>
          x²
        </button>
        <button id="modes" name="√" onClick={this.buttonPressed}>
          √
        </button>
        <button id="modes" name="%" onClick={this.buttonPressed}>
          %
        </button>
      </div>
    );
  }
}

export default KeyPad;
