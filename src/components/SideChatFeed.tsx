import { useEffect, useState } from "react";
import { SideChatFeedProps, User } from "../common";
import Feeds from "./Feeds";
import Searchbar from "./Searchbar";
import AvatarsCarousel from "./AvatarsCarousel";

const SideChatFeed = ({ users }: SideChatFeedProps) => {
  const [people, setPeople] = useState<User[]>([]);
  const filterSearch = (text: string) => {
    if (text === "") {
      setPeople(users);
    } else {
      const filteredPeople = users.filter((user) => {
        return user.displayName.toLowerCase().includes(text.toLowerCase());
      });
      setPeople(filteredPeople);
    }
  };

  useEffect(() => {
    if (users.length > 0) {
      setPeople(users);
    }
  }, [users]);

  return (
    <aside className="md:order-first lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-full  md:w-96 flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex flex-col space-y-5 pt-5 px-5">
          <div className="text-sm">Users</div>
          <Searchbar filterSearch={filterSearch} />
          <div className="flex flex-row justify-around">
            <AvatarsCarousel people={people} />
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

export default SideChatFeed;
