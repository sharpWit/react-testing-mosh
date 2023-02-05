import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  async getUserData(userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return await (await response).json();
    
  }
  

  componentDidMount() {
    this.getUserData(this.props.userId).then((user) =>
      this.setState({
        user,
      })
    );
  }
  render() {
    const { user } = this.state;
    return (
      <>
        {user && (
          <div className="section">
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
          </div>
        )}
      </>
    );
  }
}

export default User;
