import React, { useState, useEffect, useContext, createContext, ReactElement } from "react";
import { IUserToken } from "../interfaces/IUser";
interface IAuthContext {
  id: number,
  email: string,
  token: string
}
const authContext = createContext<IUserToken>({
  id: null,
  email: null,
  token: null
});

export function ProvideAuth({ children }: {children : any}) {
  const auth = useProvideAuth();
  return (<authContext.Provider value={auth}>{children}</authContext.Provider>);
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<IUserToken>({
    id: 0,
    email: "",
    token: ""
  });
  return {
    id: user.id,
    email: user.email,
    token: user.token
  };
}