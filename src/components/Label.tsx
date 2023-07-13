import { LabelProps } from "../common";

const Label = ({ text }: LabelProps) => {
  return (
    <label htmlFor="remember-me" className="block text-sm text-gray-900">
      {text}
    </label>
  );
};

export default Label;
