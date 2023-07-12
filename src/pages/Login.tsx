import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useLoading } from "../context/LoadierContext";
import { toast } from "react-toastify";
import {
  DeveloperSlogan,
  FormHeader,
  LoginForm,
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
            <div>
              <LogoWithText />
              <FormHeader
                headline="Log in to your account"
                text="create a brand new account today"
                isUnderlined={true}
                to="/signup"
              />
            </div>
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              submitHandler={submitHandler}
            />
            <div className="flex flex-row items-center justify-center m-4">
              <DeveloperSlogan />
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
