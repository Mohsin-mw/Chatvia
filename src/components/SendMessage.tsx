import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <form onSubmit={HandleSubmit} className="w-full flex flex-row px-5 py-3">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered bg-neutral  w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-square mx-2 bg-primary-shade-2">
        <PaperAirplaneIcon className="h-6 w-6 text-neutral-50" />
      </button>
    </form>
  );
};

export default SendMessage;
