import { LoginFormProps } from "../common";

const Form = ({ submitHandler, children }: LoginFormProps) => {
  return (
    <form
      action="#"
      method="POST"
      className="space-y-4 mt-10 mb-1"
      onSubmit={(event) => submitHandler(event)}
    >
      {children}
    </form>
  );
};

export default Form;
