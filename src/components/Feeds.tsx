import { useContext, useEffect, useState } from "react";
import { User } from "../common";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../services/firebase";
import { ChatContext } from "../context/ChatContext";
import FeedChatButton from "./FeedChatButton";

export default function Feeds() {
  const { currentUser } = useContext(AuthContext);
  const { disptach } = useContext(ChatContext);
  const [currentBox, setCurrentBox] = useState<number>();

  const [chats, setChats] = useState<User[]>([]);

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    }
  }, [currentUser]);

  const HandleSelect = (user) => {
    disptach({ type: "CHANGE_USER", payload: user });
    setCurrentBox(user.uid);
  };

  return (
    <div className="w-full">
      <ul role="list" className="">
        {chats &&
          Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              <div key={chat[0]} onClick={() => HandleSelect(chat[1].userInfo)}>
                <FeedChatButton chat={chat} currentBox={currentBox} />
              </div>
            ))}
      </ul>
    </div>
  );
}
