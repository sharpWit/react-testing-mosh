import { Component } from "react";
import HeadingChat from "./HeadingChat";
import BodyChat from "./BodyChat";
import FooterChat from "./FooterChat";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",
      chatsList: [
        { type: "sent", message: "Good morning, Sir!", time: "11:37:08 am" },
        {
          type: "recive",
          message: "Good morning, How are you?",
          time: "11:39:57 am",
        },
        {
          type: "sent",
          message: "I'me fine thanks, and you?",
          time: "11:40:10 am",
        },
        {
          type: "recive",
          message: "I'm glad to meet you, Sir!",
          time: "11:42:55 am",
        },
      ],
      gravatars: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(message) {
    console.log(message);
    this.setState((state) => {
      return {
        ...state,
        chatsList: [
          ...state.chatsList,
          {
            type: "sent",
            message,
            time: new Date().toLocaleTimeString(),
          },
        ],
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
