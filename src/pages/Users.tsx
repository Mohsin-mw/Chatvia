import Avatar from "../components/Avatars";
import Feeds from "../components/Feeds";
import Searchbar from "../components/Searchbar";

export default function Users() {
  return (
    <div className="w-full">
      <div className="relative flex h-full w-full flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex flex-col justify-center items-center space-y-5 pt-5 px-5">
          <div className="text-sm">Chats</div>
          <Searchbar />

          <div className="flex flex-col items-start justify-start">
            <div className="my-3 text-sm">Recent</div>
            <Feeds />
          </div>
        </div>
      </div>
    </div>
  );
}
