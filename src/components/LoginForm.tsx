import { LoginFormProps } from "../common";
import { FormInput, SignInFormHelpers } from "../components/index";
import PrimaryButton from "./PrimaryButton";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  submitHandler,
}: LoginFormProps) => {
  return (
    <form
      action="#"
      method="POST"
      className="space-y-6 mt-6"
      onSubmit={(event) => submitHandler(event)}
    >
      <FormInput
        labelName="Email Address"
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        labelName="Password"
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SignInFormHelpers />
      <PrimaryButton>Sign In</PrimaryButton>
    </form>
  );
};

export default LoginForm;
