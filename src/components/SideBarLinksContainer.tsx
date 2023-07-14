import { Link } from "react-router-dom";
import { SideBarLinksContainerProps } from "../common";

const SideBarLinksContainer = ({ navigation }: SideBarLinksContainerProps) => {
  return (
    <nav aria-label="Sidebar" className="mt-5">
      <div className="space-y-1 px-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="group flex items-center rounded-md p-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <item.icon
              className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SideBarLinksContainer;
