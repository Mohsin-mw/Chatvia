import { UserIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

const ChatUserBanner: React.FC = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="border-b-[1px] pb-5">
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
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
              <Link
                to={`/viewprofile/${data.user.uid}`}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-neutral duration-200"
              >
                <UserIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </Link>
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
