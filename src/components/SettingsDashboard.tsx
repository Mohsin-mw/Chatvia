import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const SettingsDashboard = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <div className="flex-1 xl:overflow-y-auto">
      <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900">
          Account
        </h1>

        <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-blue-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm text-blue-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-blue-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
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
                  workcation.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  defaultValue={user?.name}
                  className="input w-full rounded-l-none  max-w-xs bg-neutral  focus:border-primary"
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
                  className="inline-block h-12 w-12 rounded-full"
                  src={user.ImageUrl}
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
                      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                    />
                  </div>
                  <button type="button" className="btn btn-ghost ml-2">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="textarea w-full bg-neutral mt-2 focus:border-primary"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm text-blue-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-blue-gray-900"
              >
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-blue-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-blue-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Phone number
              </label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              >
                <option />
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-blue-gray-900"
              >
                Language
              </label>
              <input
                type="text"
                name="language"
                id="language"
                className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
              />
            </div>

            <p className="text-sm text-blue-gray-500 sm:col-span-6">
              This account was created on{" "}
              <time dateTime="2017-01-05T20:35:40">
                January 5, 2017, 8:35:40 PM
              </time>
              .
            </p>
          </div>

          <div className="flex justify-end pt-8">
            <button type="button" className="btn btn-neutral mr-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsDashboard;
