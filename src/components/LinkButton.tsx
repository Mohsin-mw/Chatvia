import { LinkButtonProps } from "../common";

const LinkButton = ({ onclick, children }: LinkButtonProps) => {
  return (
    <button
      onClick={onclick}
      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-neutral duration-200"
    >
      <>{children}</>
    </button>
  );
};

export default LinkButton;
