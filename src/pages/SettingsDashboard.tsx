import { useContext, useEffect, useState } from "react";
import "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import Logout from "./LogOut";
import PersonalInformation from "../components/PersonalInformation";
import ProfileInformation from "../components/ProfileInformation";
import { useLoading } from "../context/LoadierContext";
import { db, storage } from "../services/firebase";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const SettingsDashboard = () => {
  const { setLoading } = useLoading();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const { currentUser } = useContext(AuthContext);

  const setValues = () => {
    setName(currentUser.displayName || "");
    setEmail(currentUser.email || "");
    setImage(currentUser.photoURL || "");
  };

  const saveChanges = async (e) => {
    e.preventDefault();
    const storageRef = ref(storage, currentUser.uid);
    const uploadTask = uploadBytes(storageRef, image);
    setLoading(true);

    uploadTask
      .then(async (snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then(async (downloadURL) => {
        await updateProfile(currentUser, {
          displayName: name,
          photoURL: downloadURL,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setLoading(false);
      });

    await updateDoc(doc(db, "users", currentUser.uid), {
      displayName: name,
    });

    setLoading(false);
  };
  ~useEffect(() => {
    setLoading(true);
    setValues();
    setLoading(false);
    console.log(currentUser);
  }, [currentUser, setLoading]);

  return (
    <div className="flex-1 xl:overflow-y-auto">
      <div className="mx-auto max-w-3xl py-10 px-4 sm:px-6 lg:py-12 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-blue-gray-900">
          Account
        </h1>

        <form className="divide-y-blue-gray-200 mt-6 space-y-8 divide-y">
          <ProfileInformation
            name={name}
            setName={setName}
            image={image}
            setImage={setImage}
          />

          <PersonalInformation
            email={email}
            setEmail={(e) => setEmail(e.target.value)}
          />
          <Logout />
          <div className="flex justify-end pt-8">
            <button type="button" className="btn btn-neutral mr-2">
              Cancel
            </button>
            <button
              onClick={(e) => saveChanges(e)}
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsDashboard;
