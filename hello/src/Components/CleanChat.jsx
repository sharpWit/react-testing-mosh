import React, { Component } from "react";
import HeadingChat from "./HeadingChat";
import BodyChat from "./BodyChat";
import FooterChat from "./FooterChat";
import { messageGenerator } from "../Services/faker";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",
      chatsList: messageGenerator(10),
      gravatars: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelScroll = this.handelScroll.bind(this);
  }

  handleSubmit(message) {
    this.setState((state) => {
      return {
        chatsList: [
          ...state.chatsList,
          { type: "sent", message, time: new Date().toLocaleTimeString() },
        ],
      };
    });
  }

  handelScroll(event) {
    if (!event.target.scrollTop) {
      this.fetchMessages(10);
    }
  }

  fetchMessages(count) {
    this.setState((state) => {
      return {
        chatsList: [...messageGenerator(count), ...state.chatsList],
      };
    });
  }

  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <HeadingChat title={this.state.title} />
            <BodyChat
              handelScroll={this.handelScroll}
              chatsList={this.state.chatsList}
              gravatars={this.state.gravatars}
            />
            <FooterChat handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
