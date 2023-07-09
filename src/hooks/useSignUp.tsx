import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { auth, storage } from "../services/firebase";
import { setUser } from "../store/userSlice";
import { User } from "../common";
import { toggleLoading } from "../store/appSlice";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { useState } from "react";

const useSignup = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const Signup = async (
    name: string,
    email: string,
    password: string,
    image
  ) => {
    try {
      dispatch(toggleLoading(true));
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(storageRef);
        await updateProfile(res.user, {
          displayName: name,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          name: name,
          email: email,
          url: downloadURL,
          description:
            "Welcome to my profile! I'm a new user of this platform and I'm excited to connect with others and explore the community",
          messages: [{ notificationId: "", number: 0 }],
        });
        const user: User = {
          uid: res.user.uid || "",
          name: res.user.displayName || null,
          email: res.user.email || null,
          url: res.user.photoURL || null,
          description:
            "Welcome to my profile! I'm a new user of this platform and I'm excited to connect with others and explore the community",
        };
        dispatch(setUser(user));
      } catch (error) {
        setError(error);
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      dispatch(toggleLoading(false));
      toast.error(error.message);
    }
  };
  return { Signup };
};

export default useSignup;
