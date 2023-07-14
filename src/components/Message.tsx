import { useContext, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { UserMessage } from "../common";

const Message = ({ message }: { message: UserMessage }) => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();
  const milliseconds =
    message.date.seconds * 1000 + message.date.nanoseconds / 1000000;
  const date = new Date(milliseconds);
  const formattedDate = date.toLocaleString();

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);

  return (
    <>
      <div
        className={`chat ${
          message.senderId == data.user.uid ? "chat-start" : "chat-end"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src={
                message.senderId == data.user.uid
                  ? data.user.photoURL
                  : currentUser.photoURL
              }
            />
          </div>
        </div>
        <div className="chat-header">
          {message.senderId == data.user.uid
            ? data.user.displayName.toUpperCase()
            : currentUser.displayName.toUpperCase()}
          <time className="mx-1 text-xs opacity-50 object-cover">
            {formattedDate}
          </time>
        </div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </>
  );
};

export default Message;
