import { useParams } from "react-router-dom";
import ChatUserBanner from "./ChatUserBanner";
import MessageScreen from "./MessageScreen";
import SendMessage from "./SendMessage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MessagesDashboard = () => {
  const { currentUser } = useContext(AuthContext);

  // let { id } = useParams();
  // const getUser = async () => {
  //   const usersString = localStorage.getItem("users");
  //   const users = await JSON.parse(usersString); // Parse the string into an array of objects
  //   const matchingItems = users.filter((item) => item.uid === id);
  //   setUser(matchingItems[0]);
  // };

  // useEffect(() => {
  //   getUser();
  // }, [id]);

  return (
    <section
      aria-labelledby="primary-heading"
      className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last"
    >
      {currentUser && (
        <>
          <ChatUserBanner user={currentUser} />
          <div className="flex flex-col h-full">
            <MessageScreen />
            <SendMessage />
          </div>
        </>
      )}
    </section>
  );
};

export default MessagesDashboard;
