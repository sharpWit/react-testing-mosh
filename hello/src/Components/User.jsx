import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  // static getDerivedStateFromProps(nexProps, prevState) {
  //   if (nexProps.userId !== prevState.prevPropsUserId) {
  //     return {
  //       user: null,
  //       prevPropsUserId: nexProps.userId,
  //     };
  //   }
  //   return null;
  // }

  componentDidMount() {
    this.getUserData(this.props.userId).then((user) =>
      this.setState({
        user,
      })
    );
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.userId !== this.props.userId) {
  //     this.getUserData(this.props.userId).then((user) =>
  //       this.setState({
  //         user,
  //       })
  //     );
  //   }
  // }
  componentWillUnmount() {
    console.log("unmount");
  }
  async getUserData(userId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return await (await response).json();
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
