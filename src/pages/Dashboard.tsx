import { useContext, useEffect, useState } from "react";
import SideChatFeed from "../components/SideChatFeed";
import { User } from "firebase/auth";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLoading } from "../context/LoadierContext";

const Dashboard = () => {
  const { setLoading } = useLoading();
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState<User[]>([]);
  const getAllUsers = async () => {
    setLoading(true); // Show loading state

    const q = await query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const updatedUsers: User[] = [];
      querySnapshot.forEach((doc) => {
        const userData = doc.data() as User;
        userData.uid === currentUser.uid ? "" : updatedUsers.push(userData);
      });
      setUsers(updatedUsers);
      setLoading(false); // Hide loading state once data is fetched
    });
  };
  useEffect(() => {
    getAllUsers();
  }, [currentUser]);
  return (
    <main className="flex flex-1 overflow-hidden">
      <Outlet />
      <SideChatFeed users={users} />
    </main>
  );
};

export default Dashboard;
