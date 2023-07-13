import { PrimaryButtonProps } from "../common";

const PrimaryButton = ({ type, children }: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className="flex w-full justify-center rounded-md border border-transparent duration-200 py-2 px-4 text-sm font-medium text-white shadow-sm bg-primary-shade hover:bg-analogous-2"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
