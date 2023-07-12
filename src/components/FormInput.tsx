import { FormInputProps } from "../common";
import { Input, Label } from "./Index";

const FormInput = ({
  labelName,
  id,
  name,
  type,
  value,
  onChange,
}: FormInputProps) => {
  return (
    <div>
      <Label text={labelName} />
      <div className="mt-1">
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
