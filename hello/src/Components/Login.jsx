import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.usernameInput = React.createRef();
    console.log(this.usernameInput);

  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post">
          <input
            ref={this.usernameInput}
            type="text"
            name="u"
            placeholder="Username"
            required="required"
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Let me in.
          </button>
        </form>
      </div>
    );
  }
}
