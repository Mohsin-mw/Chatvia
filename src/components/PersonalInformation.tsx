import { PersonalInformationProps } from "../common";
import { ProfileInput } from "./Index";

const PersonalInformation = ({ email, setEmail }: PersonalInformationProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 pt-8 sm:grid-cols-6 sm:gap-x-6">
      <div className="sm:col-span-6">
        <h2 className="text-xl font-medium text-blue-gray-900">
          Personal Information
        </h2>
      </div>
      <ProfileInput
        labelName="Email Address"
        type="text"
        name="phone-number"
        id="phone-number"
        value={email}
        disabled={true}
        onChange={setEmail}
      />

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
          disabled={true}
          defaultValue="ca"
          autoComplete="country-name"
          className="input w-full max-w-xs bg-neutral mt-2 focus:border-primary"
        >
          <option value="pk">Pakistan</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="mx">Mexico</option>
        </select>
      </div>
    </div>
  );
};

export default PersonalInformation;
