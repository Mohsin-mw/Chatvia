import { Link } from "react-router-dom";
import { TextLinkProps } from "../common";

const TextLink = ({ text, isUnderlined, to }: TextLinkProps) => {
  return (
    <div className="text-sm">
      <Link
        to={to}
        className={`font-medium text-indigo-600 hover:text-indigo-500 ${
          isUnderlined ? "underline underline-offset-4" : ""
        }`}
      >
        {text}
      </Link>
    </div>
  );
};

export default TextLink;
