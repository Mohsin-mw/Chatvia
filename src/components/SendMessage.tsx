import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const SendMessage = () => {
  return (
    <div className="w-full flex flex-row px-5 py-3">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered bg-neutral  w-full"
      />
      <button className="btn btn-square mx-2 bg-primary-shade-2">
        <PaperAirplaneIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </div>
  );
};

export default SendMessage;
