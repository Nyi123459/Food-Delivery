import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const logout = async () => {
    try {
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  return { logout };
};

export default useLogout;
