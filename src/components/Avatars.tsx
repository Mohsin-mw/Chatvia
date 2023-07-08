import { Link } from "react-router-dom";
import { User } from "../common";

interface Props {
  user: User;
}

const Avatar = ({ user }: Props) => {
  return (
    <Link
      to={`/viewprofile/${user.uid}`}
      state={user.uid}
      className="group block flex-shrink-0"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <img
            className="object-cover inline-block h-9 w-9 rounded-full"
            src={user.url}
          />
        </div>
        <div className="mt-1 flex flex-col">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {user.name}
          </p>
          <p className="text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100  group-hover:text-gray-700 duration-200">
            View profile
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
