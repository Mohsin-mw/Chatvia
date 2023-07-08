import { useEffect, useState } from "react";
import MessagesDashboard from "../components/MessagesDashboard";
import SideChatFeed from "../components/SideChatFeed";
import { User } from "firebase/auth";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Message } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Outlet } from "react-router-dom";
import { setUser } from "../store/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
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
    const loggedUser = user;
    const q = await query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const allUsers: User[] = [];
      const updatedUsers: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        allUsers.push(userData);
        if (userData.uid === loggedUser?.uid) {
          dispatch(setUser(userData));
        } else {
          updatedUsers.push(userData);
        }
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
