import { useState } from "react";
import { toast } from "react-toastify";
import useSignup from "../hooks/useSignUp";
import {
  Form,
  FormHeader,
  FormInput,
  ImageSelector,
  InputFile,
  Label,
  Logo,
  PlaceholderUserImage,
} from "../components/Index";
import PrimaryButton from "../components/PrimaryButton";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const { Signup } = useSignup();

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setImage("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Message didn't match");
    } else {
      Signup(username, email, password, image);
    }
    resetForm();
  };

  return (
    <div className="flex min-h-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <Logo />
      <FormHeader
        headline="Create a new account"
        text="Log into your account"
        isUnderlined={true}
        to="/login"
      />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white border-2 border-primary py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form submitHandler={(event) => handleSubmit(event)}>
            <FormInput
              labelName="Username"
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <FormInput
              labelName="Confirm Password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="sm:col-span-6 mt-5">
              <div className="mt-1 flex items-center">
                <PlaceholderUserImage />
                <ImageSelector>
                  <Label text="Change" />
                  <InputFile
                    id="userPhoto"
                    name="userPhoto"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </ImageSelector>
              </div>
            </div>
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
