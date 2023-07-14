import { FormInputProps } from "../common";
import { InputText, Label } from "./Index";

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
      {labelName && <Label text={labelName} />}
      <div className="mt-1">
        <InputText
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
