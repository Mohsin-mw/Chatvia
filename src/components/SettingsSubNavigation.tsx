import { CogIcon, BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

const subNavigation = [
  {
    name: "Account",
    description:
      "It allows you to modify personal information, update preferences, and configure various aspects of your account",
    href: "/profile/settings",
    icon: CogIcon,
    current: false,
  },
  {
    name: "Logout",
    description:
      "By selecting this option, you will be signed out and redirected to the login page",
    href: "/profile/logout",
    icon: BellIcon,
    current: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SettingsSubNavigation = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (name) => {
    setSelectedItem(name);
  };
  return (
    <nav
      aria-label="Sections"
      className="hidden w-96 flex-shrink-0 border-r border-blue-gray-200 bg-white xl:flex xl:flex-col"
    >
      <div className="flex h-16 flex-shrink-0 items-center border-b border-blue-gray-200 px-6">
        <p className="text-lg font-medium text-blue-gray-900">Settings</p>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {subNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              "flex p-6",
              selectedItem === item.name
                ? "bg-neutral"
                : "hover:bg-neutral hover:bg-opacity-50 duration-200"
            )}
            aria-current={item.current ? "page" : undefined}
            onClick={() => handleItemClick(item.name)}
          >
            <item.icon
              className="-mt-0.5 h-6 w-6 flex-shrink-0 text-blue-gray-400"
              aria-hidden="true"
            />
            <div className="ml-3 text-sm">
              <p className="font-medium text-blue-gray-900">{item.name}</p>
              <p className="mt-1 text-blue-gray-500">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SettingsSubNavigation;
