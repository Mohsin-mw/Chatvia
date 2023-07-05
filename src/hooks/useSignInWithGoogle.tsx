import { useDispatch } from "react-redux";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";
import { setUser } from "../store/userSlice";
import { User } from "../common.types";
import { toggleLoading } from "../store/appSlice";

const useSignInWithGoogle = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      dispatch(toggleLoading(true));
      const result = await signInWithPopup(auth, provider);
      const user: User = {
        uid: result.user?.uid || "",
        name: result.user?.displayName || null,
        email: result.user?.email || null,
        ImageUrl: result.user?.photoURL || null,
      };
      if (user.uid) {
        dispatch(setUser(user));
      } else {
        console.log("User data not available");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading(false));
    }
  };

  return { signInWithGoogle };
};

export default useSignInWithGoogle;
