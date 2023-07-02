// import { Spinner } from "flowbite-react";
const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute z-10 bg-dark left-0 top-0">
      <span className="loading loading-infinity loading-lg text-primary"></span>
    </div>
  );
};

export default Loader;
