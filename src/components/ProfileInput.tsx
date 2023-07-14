import { FormInputProps } from "../common";

const ProfileInput = ({
  labelName,
  id,
  name,
  type,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor="email-address"
        className="block text-sm font-medium text-blue-gray-900"
      >
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
      />
    </div>
  );
};

export default ProfileInput;
