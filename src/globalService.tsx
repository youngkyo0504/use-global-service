import { createContext, FC } from "react";
import { ServiceProvider } from "./serviceProvider";
import React from "react";
export const GlobalServiceContext = createContext<ServiceProvider | undefined>(
  undefined
);
const serviceProvider = new ServiceProvider();
interface GlobalServiceProps {
  children: React.ReactNode;
}

const GlobalServiceProvider: FC<GlobalServiceProps> = ({ children }) => {
  return (
    <GlobalServiceContext.Provider value={serviceProvider}>
      {children}
    </GlobalServiceContext.Provider>
  );
};

export default GlobalServiceProvider;
