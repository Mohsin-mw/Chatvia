import ChatUserBanner from "./ChatUserBanner";
import MessageScreen from "./MessageScreen";
import SendMessage from "./SendMessage";

const ChatFeedLeft = () => {
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

export default ChatFeedLeft;
