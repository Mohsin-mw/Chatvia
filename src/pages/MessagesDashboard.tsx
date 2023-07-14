import { useContext } from "react";
import ChatUserBanner from "../components/ChatUserBanner";
import MessageScreen from "../components/MessageScreen";
import SendMessage from "../components/SendMessage";
import { ChatContext } from "../context/ChatContext";
import LinkButton from "../components/LinkButton";
import { UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const MessagesDashboard = () => {
  const { data } = useContext(ChatContext);
  const navigate = useNavigate();
  const ClickHandler = () => {
    navigate(`/viewprofile/${data.user.uid}`);
  };

  return (
    <section
      aria-labelledby="primary-heading"
      className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
    >
      <ChatUserBanner
        user={data.user}
        Button={
          <LinkButton onclick={ClickHandler}>
            <UserIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span>Profile</span>
          </LinkButton>
        }
      />
      <div className="flex flex-col h-full">
        <MessageScreen />
        <SendMessage />
      </div>
    </section>
  );
};

export default MessagesDashboard;
