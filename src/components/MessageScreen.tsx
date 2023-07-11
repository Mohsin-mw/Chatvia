import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
const messagess = [
  {
    id: 1,
    type: "comment",
    person: "Eduardo Benz",
    imageUrl:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
    time: "12:45AM",
  },
];
const MessageScreen = () => {
  const { data } = useContext(ChatContext);
  console.log(data);

  const [messages, setMessages] = useState();
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      // doc.exists() && setMessages(doc.data().messages);
      console.log(doc.data());
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);
  return (
    <div className="grow py-5 px-5">
      {messagess.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageScreen;
