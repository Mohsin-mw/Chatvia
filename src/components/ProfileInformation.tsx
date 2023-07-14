import { ProfileInformationProps } from "../common";

const ProfileInformation = ({
  name,
  setName,
  image,
  setImage,
}: ProfileInformationProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
      <div className="sm:col-span-6">
        <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
        <p className="mt-1 text-sm text-blue-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div className="sm:col-span-6">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-blue-gray-900"
        >
          Username
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="px-3 inline-flex items-center rounded-l-md  bg-primary sm:text-sm">
            chatvia.com/
          </span>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            value={name}
            onChange={setName}
            className="input w-full rounded-l-none  max-w-xs bg-neutral  focus:border-none focus:outline-none"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          htmlFor="photo"
          className="block text-sm font-medium text-blue-gray-900"
        >
          Photo
        </label>
        <div className="mt-1 flex items-center">
          <img
            className="inline-block h-12 w-12 rounded-full object-cover"
            src={image}
            alt=""
          />
          <div className="ml-4 flex">
            <div className="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-primary">
              <label
                htmlFor="user-photo"
                className="pointer-events-none relative text-sm font-medium text-blue-gray-900"
              >
                <span>Change</span>
                <span className="sr-only"> user photo</span>
              </label>
              <input
                id="user-photo"
                name="user-photo"
                type="file"
                onChange={setImage}
                className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
