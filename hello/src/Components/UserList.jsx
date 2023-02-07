import React, { Component } from "react";
import UserSelector from "./UserSelector";
import User from "./User";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }
  handleChangeUser(index) {
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
          handleChange={this.handleChangeUser}
          selectedIndex={selectedIndex}
          users={users}
        />
        <User key={users[selectedIndex]} userId={users[selectedIndex]} />
      </>
    );
  }
}

export default UserList;
