import {
  Bars3Icon,
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import { NavigationProps } from "../common.types";

const Sidebar = ({ user, navigation }: NavigationProps) => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-neutral">
          <div className="flex-1">
            <div className="flex items-center justify-center bg-indigo-600 py-4">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <nav
              aria-label="Sidebar"
              className="flex flex-col items-center space-y-3 py-6"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-dark duration-200 group "
                >
                  <item.icon
                    className="h-6 w-6  group-hover:text-primary-shade-2 duration-200"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 pb-5">
            <a href="#" className="w-full flex-shrink-0">
              <img
                className="mx-auto block h-10 w-10 rounded-full"
                src={user.imageUrl}
                alt=""
              />
              <div className="sr-only">
                <p>{user.name}</p>
                <p>Account settings</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
