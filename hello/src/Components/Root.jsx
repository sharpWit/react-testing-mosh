import React, { Component } from "react";
import color from "../Services/randomColor";
import A from "./A";
import B1 from "./B1";
import B2 from "./B2";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import D1 from "./D1";
import D2 from "./D2";

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };

    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }

  generateRandomNumber() {
    this.setState({ number: Math.random() });
  }
  render() {
    return (
      <div style={{ flexDirection: "column", backgroundColor: color() }}>
        <A>
          <B1>
            <C1>
              <D1></D1>
            </C1>
            <C2>
              <D2></D2>
            </C2>
          </B1>
          <B2>
            <C3></C3>
            <C4></C4>
          </B2>
        </A>
        <A>
          <B1>
            <C1>
              <D1></D1>
            </C1>
            <C2>
              <D2></D2>
            </C2>
          </B1>
          <B2>
            <C3></C3>
            <C4></C4>
          </B2>
        </A>
        <button onClick={this.generateRandomNumber}>
          Generate Random props
        </button>
      </div>
    );
  }
}
