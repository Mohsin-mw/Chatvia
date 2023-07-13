import { InputFileProps } from "../common";

const InputFile = ({ id, name, onChange }: InputFileProps) => {
  return (
    <input
      id={id}
      name={name}
      type="file"
      onChange={onChange}
      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
    />
  );
};

export default InputFile;
