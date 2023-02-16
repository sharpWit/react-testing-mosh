import React, { Component } from "react";

class BuyClass extends Component {
  render() {
    const { name } = this.props;
    function showAlert() {
      alert(name);
    }
    function handleClick() {
      setTimeout(showAlert, 2000);
    }
    return (
      <div>
        <span className="badge" onClick={handleClick}>
          Buy
        </span>
        <p>Class</p>
      </div>
    );
  }
}

export default BuyClass;
