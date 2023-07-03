import Avatar from "./Avatars";
import Feeds from "./Feeds";
import Searchbar from "./Searchbar";

const MainMessageArea = () => {
  return (
    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex flex-col space-y-5 pt-5 px-5">
          <div className="text-sm">Chats</div>
          <Searchbar />
          <div className="flex flex-row justify-around">
            <Avatar
              name="Tim Cook"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            />
            <Avatar
              name="Elena Joy"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            <Avatar
              name="Selena Gomez"
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="my-3 text-sm">Recent</div>
            <Feeds />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MainMessageArea;
