import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { useLoading } from "../context/LoadierContext";

const useSignInWithGoogle = () => {
  const { isLoading, setLoading } = useLoading();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { signInWithGoogle };
};

export default useSignInWithGoogle;
