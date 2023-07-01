import { Spinner } from "flowbite-react";
const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center absolute z-10 bg-gray-100 left-0 top-0">
      <Spinner className="fill-primary" />
    </div>
  );
};

export default Loader;
