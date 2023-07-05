import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { setUser } from "../store/userSlice";
import { User } from "../common.types";
import { toggleLoading } from "../store/appSlice";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const useSignup = () => {
  const dispatch = useDispatch();

  const Signup = async (name: string, email: string, password: string) => {
    try {
      dispatch(toggleLoading(true));
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const result = userCredential.user;

      await updateProfile(result, {
        displayName: name,
        photoURL:
          "https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background-png-image_4853791.png",
      });

      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: result.displayName,
          email: result.email,
          password: password,
          url: result.photoURL,
          description:
            "Welcome to my profile! I'm a new user of this platform and I'm excited to connect with others and explore the community",
          messages: [{ notificationId: "", number: 0 }],
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const user: User = {
        uid: result?.uid || "",
        name: result?.displayName || null,
        email: result?.email || null,
        ImageUrl: result?.photoURL || null,
        description:
          "Welcome to my profile! I'm a new user of this platform and I'm excited to connect with others and explore the community",
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
