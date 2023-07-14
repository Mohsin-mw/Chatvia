import { UserIcon } from "@heroicons/react/20/solid";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
import CoverImage from "./CoverImage";
import LinkButton from "./LinkButton";

const ChatUserBanner: React.FC = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="border-b-[1px] pb-5">
      <div>
        <CoverImage />
      </div>
      <div className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 ">
          <div className="flex ">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-primary-shade-2 sm:h-32 sm:w-32"
              src={data.user.photoURL}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 ">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {data.user.displayName}
              </h1>
            </div>
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <LinkButton to={`/viewprofile/${data.user.uid}`}>
                <UserIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900 ">
            {data.user.displayName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ChatUserBanner;
