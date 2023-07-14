import { XMarkIcon } from "@heroicons/react/24/outline";
import { CloseButtonProps } from "../common";

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      type="button"
      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-shade"
      onClick={onClick}
    >
      <span className="sr-only">Close sidebar</span>
      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </button>
  );
};

export default CloseButton;
