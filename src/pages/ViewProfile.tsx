import { ChevronLeftIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../common";
import { db } from "../services/firebase";
import { AuthContext } from "../context/AuthContext";
import ChatUserBanner from "../components/ChatUserBanner";
import LinkButton from "../components/LinkButton";
import { useLoading } from "../context/LoadierContext";

export default function ViewProfile() {
  const { setLoading } = useLoading();
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState<User>();
  const { id } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const getUser = async () => {
    setLoading(true);
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("uid", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });
    setLoading(false);
  };

  const handleMessage = async () => {
    setLoading(true);
    const combinedId =
      currentUser.uid > user?.uid
        ? currentUser.uid + user?.uid
        : user?.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    navigate("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="flex h-full">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                aria-label="Breadcrumb"
              >
                <button
                  onClick={goBack}
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <ChevronLeftIcon
                    className="-ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Back</span>
                </button>
              </nav>

              <article>
                {user && (
                  <ChatUserBanner
                    user={user}
                    Button={
                      <div onClick={handleMessage}>
                        <LinkButton onclick={handleMessage}>
                          <EnvelopeIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Message</span>
                        </LinkButton>
                      </div>
                    }
                  />
                )}
                <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user?.email}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone Number
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        +913244123421
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {user?.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
