import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Outlet, useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-1 flex-col overflow-y-auto xl:overflow-hidden">
      <nav
        aria-label="Breadcrumb"
        className="border-b border-blue-gray-200 bg-white xl:hidden"
      >
        <div className="mx-auto flex max-w-3xl items-start py-3 px-4 sm:px-6 lg:px-8">
          <button
            onClick={goBack}
            className="-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-blue-gray-900"
          >
            <ChevronLeftIcon
              className="h-5 w-5 text-blue-gray-400"
              aria-hidden="true"
            />
            <span>Back</span>
          </button>
        </div>
      </nav>
      <div className="flex flex-1 xl:overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
