import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img className="h-8 my-5 w-auto" src={logo} alt="Your Company" />
    </div>
  );
};

export default Logo;
