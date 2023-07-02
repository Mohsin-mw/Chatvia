/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Ricardo Copper",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Elena Joy",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Selena Gomez",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  // More people...
];
const activityItems = [
  {
    id: 1,
    person: people[0],
    message:
      "Hey, I need some help with a project. Can you spare a few minutes to discuss it?",
    time: "1h",
    active: false,
  },
  {
    id: 2,
    person: people[1],
    message:
      "I'm having trouble collaborating with my team. Any advice on improving teamwork?",
    time: "just now",
    active: true,
  },
  {
    id: 3,
    person: people[2],
    message:
      "When dealing with tight deadlines, it's crucial to prioritize tasks effectively. One approach is to break down the project into smaller, manageable tasks and assign them based on priority and dependencies.",
    time: "2h",
    active: false,
  },
  {
    id: 4,
    person: people[3],
    message:
      "Reaching a consensus can be achieved through effective communication and active listening. ",
    time: "12min",
    active: false,
  },
];

export default function Feeds() {
  return (
    <div>
      <ul role="list" className="">
        {activityItems.map((activityItem) => (
          <li
            key={activityItem.id}
            className={` my-2 py-4 px-3 rounded-md hover:bg-neutral duration-200 cursor-pointer ${
              activityItem.active ? "bg-neutral" : ""
            }`}
          >
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src={activityItem.person.imageUrl}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">
                    {activityItem.person.name}
                  </h3>
                  <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">{activityItem.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
