import { Link } from "react-router-dom";
import { LinkButtonProps } from "../common";

const LinkButton = ({ to, children }: LinkButtonProps) => {
  return (
    <Link
      to={to}
      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-neutral duration-200"
    >
      <>{children}</>
    </Link>
  );
};

export default LinkButton;
