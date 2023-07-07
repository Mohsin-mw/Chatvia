import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const profile = {
  name: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};
const DashboardHome = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div className=" pb-5 w-full">
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
        />
      </div>
      <div className=" mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 ">
          <div className="flex justify-center items-center w-full flex-col space-y-5  ">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-primary-shade-2 sm:h-32 sm:w-32 object-cover"
              src={user.url}
              alt=""
            />
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {user.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
