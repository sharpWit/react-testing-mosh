import React, { Component } from "react";
// import { Watch } from "react-loader-spinner";
import Info from "./Info";
import getInfo from "../Services/getInfo";
import { Triangle } from "react-loader-spinner";

class IpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <>
        {isLoading ? (
          <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <Info data={this.state.info} />
        )}
      </>
    );
  }
}

export default IpInfo;
