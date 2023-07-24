import { useContext, useState } from "react";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import Sidebar from "../components/Sidebar";
import PhoneSideBar from "../components/PhoneSideBar";
import PhoneTopBar from "../components/PhoneTopBar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext) || {};
  const user = currentUser || {
    displayName: "",
    email: "",
    photoURL: "",
    description: "",
  };
  return (
    <div className="flex h-full ">
      <PhoneSideBar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        user={user}
        navigation={navigation}
        logo={logo}
      />
      <Sidebar user={currentUser} navigation={navigation} />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <PhoneTopBar setMobileMenuOpen={setMobileMenuOpen} logo={logo} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
