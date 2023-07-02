const Avatar = () => {
  return (
    <a href="#" className="group block flex-shrink-0">
      <div className="flex flex-col items-center">
        <div>
          <img
            className="inline-block h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="mt-1 flex flex-col">
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            Tom Cook
          </p>
          <p className="text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100  group-hover:text-gray-700 duration-200">
            View profile
          </p>
        </div>
      </div>
    </a>
  );
};

export default Avatar;
