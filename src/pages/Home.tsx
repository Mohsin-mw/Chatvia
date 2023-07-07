import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HomeIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import Sidebar from "../components/Sidebar";
import PhoneSideBar from "../components/PhoneSideBar";
import PhoneTopBar from "../components/PhoneTopBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "../store/store";
import { db } from "../services/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";
import { setUsers } from "../store/appSlice";
import { Message, User } from "../common";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Users", href: "/users", icon: MagnifyingGlassCircleIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Home = () => {
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useSelector((state: RootState) => state.user);
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
      localStorage.setItem("users", JSON.stringify([...users, ...newUsers]));
    });
  };

  useEffect(() => {
    // getUserMessages();
    getAllUsers();
  }, []);

  return (
    <>
      <div className="flex h-full">
        {user && (
          <PhoneSideBar
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            user={user}
            navigation={navigation}
            logo={logo}
          />
        )}
        <Sidebar user={user} navigation={navigation} />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <PhoneTopBar setMobileMenuOpen={setMobileMenuOpen} logo={logo} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
