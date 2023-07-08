import { User } from "../common";
import Avatar from "./Avatars";
import Feeds from "./Feeds";
import Searchbar from "./Searchbar";

const users = [
  {
    name: "Tim Cook",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mark Zuckerberg",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Isabella",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Sophia",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Jeff Bezos",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emma",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const SideChatFeed = ({ users }: { users: User[] }) => {
  return (
    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex flex-col space-y-5 pt-5 px-5">
          <div className="text-sm">Chats</div>
          <Searchbar />
          <div className="flex flex-row justify-around">
            <div className="flex flex-row overflow-hidden">
              {users.map((user) => (
                <div key={user.uid} className="carousel-item px-2">
                  <Avatar user={user} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="my-3 text-sm">Recent</div>
            <Feeds users={users} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideChatFeed;
