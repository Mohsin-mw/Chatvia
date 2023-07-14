import CoverImage from "./CoverImage";

const ChatUserBanner = ({ user, Button }) => {
  return (
    <div className="border-b-[1px] pb-5">
      <div>
        <CoverImage />
      </div>
      <div className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 ">
          <div className="flex ">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-primary-shade sm:h-32 sm:w-32"
              src={user.photoURL}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 ">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {user.displayName}
              </h1>
            </div>
            <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {Button}
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900 ">
            {user.displayName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ChatUserBanner;
