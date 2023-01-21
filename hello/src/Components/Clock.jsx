import React, { Component } from "react";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    setInterval(this.tick.bind(this), 1000);
  }
  render() {
    return (
      <div>
        <p>Hello Users!</p>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
}
export default Clock;
