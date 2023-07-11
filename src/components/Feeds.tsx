import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../common";
import { onSnapshot, doc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../services/firebase";

export default function Feeds() {
  const { currentUser } = useContext(AuthContext);
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

  return (
    <div>
      <ul role="list" className="">
        {Object.entries(chats)?.map((chat) => (
          <Link key={chat[0]} to={`/chat/${chat[0]}`}>
            <li
              className={` my-2 py-4 px-3 rounded-md hover:bg-neutral duration-200 cursor-pointer ${
                Number(chat[1].userInfo.uid) === currentBox ? "bg-neutral" : ""
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
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
