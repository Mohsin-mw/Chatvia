import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/userSlice";
import { toggleLoading } from "../store/appSlice";

export default function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    setIsLoggingOut(true);
    dispatch(toggleLoading(true));
    setTimeout(() => {
      dispatch(toggleLoading(false));
      dispatch(clearUser());
    }, 2000);
  };

  return (
    <div className="rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Logout</h3>
      </div>
      <p className="text-base text-gray-700 mb-6">
        By logging out, you will be signed out of your account and lose access
        to its features. You can always sign in again later.
      </p>
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
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
        <p className="text-gray-800">
          By logging out, you will be signed out of your account and lose access
          to your saved data and preferences.
        </p>
      </div>
      <div className="flex justify-end mt-5">
        <button
          type="button"
          className="btn-neutral text-white py-2 px-4 rounded transition duration-200"
          onClick={handleLogout}
        ></button>
      </div>
    </div>
  );
}
