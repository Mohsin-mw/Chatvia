import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useLoading } from "../context/LoadierContext";
import { toast } from "react-toastify";
import {
  DeveloperSlogan,
  FormHeader,
  LoginForm,
  LoginPageImage,
  LogoWithText,
} from "../components";
import { FirebaseError } from "firebase/app";

const Login = () => {
  const { setLoading } = useLoading();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof FirebaseError) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full w-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <LogoWithText />
            <FormHeader
              headline="Log in to your account"
              text="create a brand new account today"
              isUnderlined={true}
              to="/signup"
            />
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              submitHandler={submitHandler}
            />
            <DeveloperSlogan />
          </div>
        </div>
        <LoginPageImage />
      </div>
    </>
  );
};

export default Login;
