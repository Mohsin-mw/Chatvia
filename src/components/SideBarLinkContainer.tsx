import { Link } from "react-router-dom";
import { SideBarProps } from "../common";

const SideBarLinkContainer = ({ navigation }: SideBarProps) => {
  return (
    <nav
      aria-label="Sidebar"
      className="flex flex-col items-center space-y-3 py-6"
    >
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="flex items-center rounded-lg p-4 text-indigo-200 hover:bg-dark duration-200 group"
        >
          <item.icon
            className="h-6 w-6  group-hover:text-primary-shade-2 duration-200"
            aria-hidden="true"
          />
          <span className="sr-only">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SideBarLinkContainer;
