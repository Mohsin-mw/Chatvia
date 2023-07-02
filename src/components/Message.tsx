interface activity {
  id: number;
  type: string;
  person: string;
  imageUrl: string;
  content: string;
  time: string;
}

interface Props {
  message: activity;
}

const Message = ({ message }: Props) => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.imageUrl} />
          </div>
        </div>
        <div className="chat-header">
          {message.person}
          <time className="mx-1 text-xs opacity-50 object-cover">
            {message.time}
          </time>
        </div>
        <div className="chat-bubble">{message.content}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
};

export default Message;
