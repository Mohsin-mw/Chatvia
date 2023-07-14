import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Logout() {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Logout</h3>
      </div>
      <p className="text-base text-gray-700 mb-6">
        By logging out, you will be signed out of your account and lose access
        to its features. You can always sign in again later.
      </p>
      <div className="flex justify-start mt-10">
        <button
          type="button"
          className="btn-neutral text-white py-2 px-4 rounded transition duration-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
