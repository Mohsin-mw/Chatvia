import { useEffect, useState } from "react";
import SideChatFeed from "../components/SideChatFeed";
import { User } from "firebase/auth";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Message } from "../common";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    const q = await query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const allUsers: User[] = [];
      const updatedUsers: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        allUsers.push(userData);
        updatedUsers.push(userData);
      });
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(allUsers));
    });
  };
  useEffect(() => {
    // getUserMessages();
    getAllUsers();
  }, []);
  return (
    <main className="flex flex-1 overflow-hidden">
      <Outlet />
      <SideChatFeed users={users} />
    </main>
  );
};

export default Dashboard;
