import { ProfileInformationProps } from "../common";
import ImageSelector from "./ImageSelector";
import InputFile from "./InputFile";
import Label from "./Label";

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
            onChange={(e) => setName(e.target.value)}
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
          <ImageSelector>
            <Label text="Change" />
            <InputFile
              id="userPhoto"
              name="userPhoto"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </ImageSelector>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
