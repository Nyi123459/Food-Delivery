import { ReactNode, createContext, useEffect, useState } from "react";

type User = {
  email: string;
  password: string;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (newUser: User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  console.log("Value", value);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
