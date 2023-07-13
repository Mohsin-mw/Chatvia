import { Link } from "react-router-dom";

const FeedChatButton = ({ chat, currentBox }) => {
  const userChat = chat[1];
  const milliseconds =
    userChat.date?.seconds * 1000 + userChat.date?.nanoseconds / 1000000;
  const date = new Date(milliseconds);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - date.getTime();
  const withinLast24Hours = timeDifference <= 86400000;
  const formattedDate = withinLast24Hours
    ? date.toLocaleTimeString()
    : date.toLocaleDateString();

  return (
    <Link to={`/chat/${chat[0]}`}>
      <li
        className={` my-2 py-4 px-3 rounded-md hover:bg-neutral duration-200 cursor-pointer ${
          chat[1].userInfo.uid == currentBox ? "bg-neutral" : ""
        }`}
      >
        <div className="flex space-x-3">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src={chat[1].userInfo.photoURL}
            alt=""
          />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">
                {chat[1].userInfo.displayName}
              </h3>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            <p className="text-sm text-gray-500">{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default FeedChatButton;
