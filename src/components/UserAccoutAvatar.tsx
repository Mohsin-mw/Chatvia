import { Link } from "react-router-dom";
import { UserAccountAvatarProps } from "../common";

const UserAccountAvatar = ({ user }: UserAccountAvatarProps) => {
  return (
    <div className="flex flex-shrink-0 pb-5 ">
      <Link to="/profile" className="w-full flex-shrink-0">
        <img
          className="mx-auto block h-10 w-10 rounded-full shadow-sm object-cover"
          src={user?.photoURL}
          alt=""
        />
      </Link>
    </div>
  );
};

export default UserAccountAvatar;
