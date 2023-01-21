import { Component } from "react";

export default class Click extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <p>Click count is {this.state.clickCount}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
  handleClick(e) {
    console.log(e.altKey);
    e.persist();
    setTimeout(function () {
      console.log(e.altKey);
    }, 500);
    this.setState((state) => {
      return {
        clickCount: state.clickCount + 1,
      };
    });
  }
}
