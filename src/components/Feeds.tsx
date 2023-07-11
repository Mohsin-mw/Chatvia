import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../common";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../services/firebase";
import { ChatContext } from "../context/ChatContext";

export default function Feeds() {
  const { currentUser } = useContext(AuthContext);
  const { disptach } = useContext(ChatContext);

  const [currentBox, setCurrentBox] = useState<number>();
  const [chats, setChats] = useState<User[]>([]);
  const clickHandler = (id: number) => {
    setCurrentBox(id);
  };

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
  };

  return (
    <div>
      <ul role="list" className="">
        {chats &&
          Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              <div key={chat[0]} onClick={() => HandleSelect(chat[1].userInfo)}>
                <Link to={`/chat/${chat[0]}`}>
                  <li
                    className={` my-2 py-4 px-3 rounded-md hover:bg-neutral duration-200 cursor-pointer ${
                      Number(chat[1].userInfo.uid) === currentBox
                        ? "bg-neutral"
                        : ""
                    }`}
                  >
                    <div className="flex space-x-3">
                      <img
                        className="h-6 w-6 rounded-full object-cover"
                        src={chat[1].userInfo.photoURL}
                        alt=""
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium">
                            {chat[1].userInfo.displayName}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500">
                          {chat[1].lastMessage?.text}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              </div>
            ))}
      </ul>
    </div>
  );
}
