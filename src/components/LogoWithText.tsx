import logo from "../assets/logo.svg";

const LogoWithText = () => {
  return (
    <div className="flex flex-row items-center">
      <img className="h-12 w-auto" src={logo} alt="Your Company" />
      <div className="font-bold text-2xl ">Chatvia</div>
    </div>
  );
};

export default LogoWithText;
