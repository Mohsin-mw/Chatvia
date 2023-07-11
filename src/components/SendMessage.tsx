import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({}),
    });
    setValue("");
  };
  return (
    <form onSubmit={HandleSubmit} className="w-full flex flex-row px-5 py-3">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered bg-neutral  w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-square mx-2 bg-primary-shade-2"
        disabled={value ? false : true}
      >
        <PaperAirplaneIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </form>
  );
};

export default SendMessage;
