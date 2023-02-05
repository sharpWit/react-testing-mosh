import React, { Component } from "react";
import UserSelector from "./UserSelector";
import User from "./User";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.handelChangeUser = this.handelChangeUser.bind(this);
  }

  handelChangeUser(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const { users } = this.props;
    const { selectedIndex } = this.state;

    return (
      <>
        <UserSelector
          handeChange={this.handelChangeUser}
          selectedIndex={selectedIndex}
          users={users}
        />
        <User userId={users[selectedIndex]} />
      </>
    );
  }
}
