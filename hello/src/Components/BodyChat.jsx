import ChatBox from "./ChatBox";
export default function BodyChat(props) {
  const chats = props.chatsList.map((chat, index) => {
    const isLeft = "recive" === chat.type;
    return (
      <ChatBox
        key={index}
        time={chat.time}
        message={chat.message}
        gravatar={isLeft ? props.gravatars.user2 : props.gravatars.user1}
        isLeft={isLeft}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{chats}</div>
    </div>
  );
}
