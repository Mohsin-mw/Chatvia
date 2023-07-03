import Message from "./Message";
const MessageScreen = () => {
  const messages = [
    {
      id: 1,
      type: "comment",
      person: "Eduardo Benz",
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
      time: "12:45AM",
    },
  ];
  return (
    <div className="grow py-5 px-5">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageScreen;
