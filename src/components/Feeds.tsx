import { useState } from "react";
import { User } from "../common";
import { Link } from "react-router-dom";

export default function Feeds({ users }: { users: User[] }) {
  const [currentBox, setCurrentBox] = useState<number>();
  const clickHandler = (id: number) => {
    setCurrentBox(id);
  };

  return (
    <div>
      <ul role="list" className="">
        {users.map((activityItem) => (
          <Link key={activityItem.uid} to={`/chat/${activityItem.uid}`}>
            <li
              className={` my-2 py-4 px-3 rounded-md hover:bg-neutral duration-200 cursor-pointer ${
                Number(activityItem.uid) === currentBox ? "bg-neutral" : ""
              }`}
            >
              <div className="flex space-x-3">
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src={activityItem.url}
                  alt=""
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{activityItem.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    {activityItem.description}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
