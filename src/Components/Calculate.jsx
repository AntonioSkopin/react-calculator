import React from "react";
import KeyPad from "./KeyPad";
import Output from "./Output";

class Calculate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "",
    };
  }

  // Checks what button is pressed and call a method depending on the button
  buttonPressed = (buttonName) => {
    if (this.state.result.length > 12) {
      this.limitExceeded();
    } else if (buttonName === "C") {
      this.reset();
    } else if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "CE") {
      this.backspace();
    } else if (buttonName === "x²") {
      this.squared();
    } else if (buttonName === "√") {
      this.root();
    } else {
      this.setState({
        result: this.state.result + buttonName,
      });
    }
  };

  // Calculates the result stored in state
  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  // Resets the screen
  reset = () => {
    this.setState({
      result: "",
    });
  };

  // Deletes the last number
  backspace = () => {
    let lastDigit = this.state.result.slice(0, -1);
    this.setState({
      result: lastDigit,
    });
  };

  // If the limit is exceeded (which is 12) reset the screen
  limitExceeded = () => {
    this.setState({
      result: "",
    });
  };

  // Squares the number what is entered
  squared = () => {
    this.setState({
      result: this.state.result * this.state.result,
    });
  };

  // Calculates the root of the number what is entered
  root = () => {
    this.setState({
      result: Math.sqrt(this.state.result),
    });
  };

  render() {
    return (
      <div className="calc-body">
        <Output result={this.state.result} />
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default Calculate;
