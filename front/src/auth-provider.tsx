import { useState, type ReactNode } from "react";
import { AuthContext, type UserApi } from "./auth-context";

type Prop = {
children:ReactNode 
}
export const AuthProvider = ({ children }:Prop) => {
  const [user, setAuthData] = useState<UserApi | null>(null);

  const updateAuthData = (data:UserApi) => {
    setAuthData((prev) => ({ ...prev, ...data }));
  };

  return (
    <AuthContext.Provider value={{user, updateAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};