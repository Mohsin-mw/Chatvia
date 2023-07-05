import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { setUser } from "../store/userSlice";
import { User } from "../common.types";
import { toggleLoading } from "../store/appSlice";

const useSignup = () => {
  const dispatch = useDispatch();

  const Signup = async (email: string, password: string) => {
    try {
      dispatch(toggleLoading(true));
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const result = userCredential.user;

      await updateProfile(result, {
        displayName: "Anonymous",
        photoURL:
          "https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background-png-image_4853791.png",
      });

      const user: User = {
        uid: result?.uid || "",
        name: result?.displayName || null,
        email: result?.email || null,
        ImageUrl: result?.photoURL || null,
      };
      if (user.uid) {
        dispatch(setUser(user));
      } else {
        console.log("User data not available");
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log("Signup error:", error);
    }
  };
  return { Signup };
};

export default useSignup;
