import ChatUserBanner from "../components/ChatUserBanner";
import MessageScreen from "../components/MessageScreen";
import SendMessage from "../components/SendMessage";

const MessagesDashboard = () => {
  return (
    <section
      aria-labelledby="primary-heading"
      className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
    >
      <ChatUserBanner />
      <div className="flex flex-col h-full">
        <MessageScreen />
        <SendMessage />
      </div>
    </section>
  );
};

export default MessagesDashboard;
