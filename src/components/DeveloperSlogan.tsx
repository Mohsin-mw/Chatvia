import { AiFillHeart } from "react-icons/ai";

const DeveloperSlogan = () => {
  return (
    <div className="">
      Developer by{" "}
      <a
        href="https://github.com/Mohsin-mw"
        target="_blank"
        className="font-bold cursor-pointer underline  underline-offset-4"
      >
        MMW
      </a>{" "}
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
