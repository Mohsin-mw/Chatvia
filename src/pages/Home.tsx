import { useState } from "react";
import { useSelector } from "react-redux";
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
import { RootState } from "../store/store";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Users", href: "/users", icon: MagnifyingGlassCircleIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user } = useSelector((state: RootState) => state.user);

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
          <PhoneTopBar setMobileMenuOpen={setMobileMenuOpen} logo={logo} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
