import { ReactNode, createContext, useContext, useState } from "react";

type User = {
  email: string;
  password: string;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (newUser: User | null) => void;
  isAuthenticated: () => boolean;
};

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
  isAuthenticated: () => false,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUserState] = useState<User | null>(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  const setCurrentUser = (newUser: User | null) => {
    setCurrentUserState(newUser);
    if (newUser) {
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  const isAuthenticated = () => {
    return currentUser !== null;
  };

  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
