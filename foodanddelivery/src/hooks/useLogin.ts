import React from "react";
import { useAuth } from "../context/userContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const { setCurrentUser } = useAuth();

  const login = async (email: string, password: string) => {
    const success = handleInputErrors(email, password);
    if (!success) return;
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        //Handle Http error
        throw new Error(data.error || "An unknown error occured");
      }
      console.log("Login Response Data:", data);
      setCurrentUser(data);

      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("currentUser", JSON.stringify(data));
      return { success: true };
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error in Logging In:", error.message);
        return { error: error.message };
      } else {
        console.error("Error connecting to MongoDB", error);
        return { error: "Error connecting to the server" };
      }
    }
  };
  return { login };
};

function handleInputErrors(email: string, password: string) {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}

export default useLogin;
