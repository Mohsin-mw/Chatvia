import { AiFillHeart } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const DeveloperSlogan = () => {
  return (
    <div className="flex flex-row items-center justify-start my-4 text-sm">
      Developer by
      <a
        href="https://github.com/Mohsin-mw"
        target="_blank"
        className="font-bold cursor-pointer flex flex-row-reverse  items-center justify-center mx-1 "
      >
        <FiExternalLink />
        <span className="">MMW</span>
      </a>
      With
      <span>
        <AiFillHeart
          style={{
            color: "#7269ef",
            display: "inline-block",
            margin: "0px 5px",
          }}
        />
      </span>
    </div>
  );
};

export default DeveloperSlogan;
