import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const isAuthenticated = () => {
    return currentUser !== null;
  };

  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
  };

  console.log("Value", value);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => useContext(UserContext);
