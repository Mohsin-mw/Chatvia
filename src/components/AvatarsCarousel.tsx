import { User } from "../common";
import Avatar from "./Avatars";

const AvatarsCarousel = ({ people }: { people: User[] }) => {
  return (
    <div className="flex flex-row overflow-hidden">
      {people.map((user) => (
        <div key={user.uid} className="carousel-item px-2">
          <Avatar user={user} />
        </div>
      ))}
    </div>
  );
};

export default AvatarsCarousel;
