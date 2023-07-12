import { AiFillHeart } from "react-icons/ai";

const DeveloperSlogan = () => {
  return (
    <div className="flex flex-row items-center justify-center m-4">
      Developer by
      <a
        href="https://github.com/Mohsin-mw"
        target="_blank"
        className="font-bold cursor-pointer underline  underline-offset-4"
      >
        <span className="mx-1">MMW</span>
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
