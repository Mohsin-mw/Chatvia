import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

interface activity {
  id: number;
  type: string;
  person: string;
  imageUrl: string;
  content: string;
  time: string;
}

interface Props {
  message: activity;
}

const Message = ({ message }) => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  console.log(data);
  console.log(currentUser);
  const milliseconds =
    message.date.seconds * 1000 + message.date.nanoseconds / 1000000;
  const date = new Date(milliseconds);
  const formattedDate = date.toLocaleString();

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
