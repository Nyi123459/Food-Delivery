import React, { useState } from "react";
import { UserContext, useAuth } from "../context/userContext";
import toast from "react-hot-toast";

export interface signupProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setCurrentUser } = useAuth();

  const signup = async ({ email, password, confirmPassword }: signupProps) => {
    console.log("Signup data:", email, password, confirmPassword);
    const success = handleInputErrors({
      email,
      password,
      confirmPassword,
    });
    if (!success) return;
    setLoading(true);
    try {
      console.log("Sending signup request with:", { email, password });
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();
      setCurrentUser(data);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("currentUser", JSON.stringify(data));
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error in Signing up:", error.message);
      } else {
        console.log("Error connecting to MongoDB", error);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

function handleInputErrors({ email, password, confirmPassword }: signupProps) {
  if (!email || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
  }
  if (password !== confirmPassword) {
    toast.error("Password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}

export default useSignup;
