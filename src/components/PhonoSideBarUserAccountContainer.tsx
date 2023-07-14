import { Link } from "react-router-dom";
import { PhonoSideBarUserAccountContainerProps } from "../common";

const PhonoSideBarUserAccountContainer = ({
  user,
}: PhonoSideBarUserAccountContainerProps) => {
  return (
    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
      <Link to="/profile" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-10 w-10 rounded-full border "
              src={user.photoURL}
            />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
              {user.displayName}
            </p>
            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
              Account Settings
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhonoSideBarUserAccountContainer;
