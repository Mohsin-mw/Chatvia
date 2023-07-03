import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toggleLoading } from "../store/appSlice";
import useLoader from "../hooks/useLoader";
import {
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import Sidebar from "../components/Sidebar";
import PhoneSideBar from "../components/PhoneSideBar";
import PhoneTopBar from "../components/PhoneTopBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const user = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Trending", href: "#", icon: FireIcon },
  { name: "Bookmarks", href: "#", icon: BookmarkSquareIcon },
  { name: "Messages", href: "#", icon: InboxIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationPath = useLocation();
  console.log(navigationPath);

  const dispatch = useDispatch();
  const HandlerLoader = () => {
    useLoader(dispatch);
  };
  useEffect(() => {
    dispatch(toggleLoading(true));
    HandlerLoader();
  }, [navigationPath.pathname]);

  return (
    <>
      <div className="flex h-full">
        <PhoneSideBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          user={user}
          navigation={navigation}
          logo={logo}
        />
        <Sidebar user={user} navigation={navigation} />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <PhoneTopBar setMobileMenuOpen={setMobileMenuOpen} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
