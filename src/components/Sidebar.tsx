import logo from "../assets/logo.svg";
import { NavigationProps } from "../common";
import { SideBarLinkContainer, UserAccountAvatar } from "../components/Index";

const Sidebar = ({ user, navigation }: NavigationProps) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-neutral">
          <div className="flex-1">
            <div className="flex items-center justify-center bg-indigo-600 py-4">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <SideBarLinkContainer navigation={navigation} />
          </div>
          <UserAccountAvatar user={user} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
