import { useEffect, useState } from "react";
import MessagesDashboard from "../components/MessagesDashboard";
import SideChatFeed from "../components/SideChatFeed";
import { User } from "firebase/auth";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { setUsers } from "../store/appSlice";

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const getUserMessages = () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { uid } = doc.data();
        if (uid === user?.uid) {
          const allMessages = doc.data().messages;
          const allMessagesList = allMessages.map((item: User) => item);
          setMessages([...messages, ...allMessagesList]);
        }
      });
    });
  };
  const getAllUsers = async () => {
    const q = await query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const newUsers: User[] = [];
      querySnapshot.forEach((doc) => {
        newUsers.push(doc.data() as User);
      });
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      // localStorage.setItem("users", JSON.stringify([...users, ...newUsers]));
    });
  };
  useEffect(() => {
    // getUserMessages();
    getAllUsers();
  }, []);
  return (
    <main className="flex flex-1 overflow-hidden">
      <MessagesDashboard />
      <SideChatFeed />
    </main>
  );
};

export default Dashboard;
