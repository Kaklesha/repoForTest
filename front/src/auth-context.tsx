import {  createContext } from "react";

export interface UserApi {
    idInstance: string;
  apiTokenInstance: string;
}

interface AuthContextType {
 user: UserApi | null;
updateAuthData: (data:UserApi)=>void;
}
export const AuthContext = createContext<AuthContextType | null>(null);


