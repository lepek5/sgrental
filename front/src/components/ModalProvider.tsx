import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext(null);
const ModalProvider = ({ children }: { children: React.ReactNode[] | React.ReactNode }) => {
  const [notification, setNotification] = useState();
  return (
    <ModalContext.Provider value={setNotification}>
      {children}
      <div id="modal"></div>
    </ModalContext.Provider>
  )
}
export default ModalProvider;