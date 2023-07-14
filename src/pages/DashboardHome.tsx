import Logo from "../components/Logo";

const DashboardHome = () => {
  return (
    <div className="hidden w-full h-screen md:flex flex-col items-center  justify-center  ">
      <Logo />
      <div className="blink">Start A New Conversation...</div>
    </div>
  );
};

export default DashboardHome;
