import { CheckBox, Label, TextLink } from "./index";

const SignInFormHelpers = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <CheckBox />
        <Label text="Remember me" />
      </div>

      <TextLink text="Forgot your password?" isUnderlined={false} to="#" />
    </div>
  );
};

export default SignInFormHelpers;
