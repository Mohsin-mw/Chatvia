import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/userSlice";
export default function LogOut() {
  const dispatch = useDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = () => {
    setIsDeleting(true);
    setTimeout(() => {
      dispatch(clearUser());
    }, 2000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Delete Your Account
        </h3>
      </div>
      <p className="text-base text-gray-700 mb-6">
        By deleting your account, all of your personal data and information
        associated with the account will be permanently removed. This action is
        irreversible, and you will no longer have access to your account and its
        features.
      </p>
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-500 mr-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 16l-4-4M8 8l4 4" />
        </svg>
        <p className="text-gray-800">
          Deleting your account will remove all personal information, including
          your profile details, settings, and preferences.
        </p>
      </div>
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-500 mr-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
        <p className="text-gray-800">
          You will lose access to all your saved data, including files,
          documents, and any other content associated with your account.
        </p>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-500 mr-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M10 14h4M9 9h6v6H9z" />
        </svg>
        <p className="text-gray-800">
          Deleting your account cannot be undone. Once you confirm the deletion,
          all of your data will be permanently erased.
        </p>
      </div>
      <div className="flex justify-end mt-5">
        <button
          type="button"
          className={`btn-neutral text-white py-2 px-4 rounded transition duration-200 ${
            isDeleting ? "cursor-not-allowed" : ""
          }`}
          onClick={handleDeleteAccount}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete Account"}
        </button>
      </div>
    </div>
  );
}
