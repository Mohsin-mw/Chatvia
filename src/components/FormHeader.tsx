import { FormHeaderProps } from "../common";
import { TextLink } from "./index";

const FormHeader = ({ headline, text, isUnderlined, to }: FormHeaderProps) => {
  return (
    <>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900  ">
        {headline}
      </h2>
      <div className="mt-2 text-sm text-gray-600 flex flex-row gap-1">
        <span>Or</span>
        <TextLink text={text} isUnderlined={isUnderlined} to={to} />
      </div>
    </>
  );
};

export default FormHeader;
