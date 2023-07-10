import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage } from "../services/firebase";
import { db } from "../services/firebase";
import { toast } from "react-toastify";
import { useLoading } from "../context/LoadierContext";

const useSignup = () => {
  const { isLoading, setLoading } = useLoading();
  const Signup = async (
    name: string,
    email: string,
    password: string,
    image
  ) => {
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, res.user.uid);
      const uploadTask = uploadBytes(storageRef, image);

      uploadTask
        .then(async (snapshot) => {
          return getDownloadURL(snapshot.ref);
        })
        .then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName: name,
            email: email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return { Signup };
};

export default useSignup;
