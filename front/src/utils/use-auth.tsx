import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import userService from "../services/user.service";

export const UserContext = createContext(null);
const Auth = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => {
  const { data: user } = useQuery("user", async () => {
    return await userService.whoami();
  })
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
export default Auth;