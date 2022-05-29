import { useContext } from "react";
import { GlobalServiceContext } from "./globalService";
type Class<T> = new (...args: any[]) => T;

const useGlobalService = <T,>(className: Class<T>) => {
  const serviceProvider = useContext(GlobalServiceContext);

  if (serviceProvider === undefined) {
    throw new Error(
      `component must be wrapped with globalServiceContextProvider`
    );
  }
  const serviceInstance = serviceProvider.use(className);
  return serviceInstance;
};

export default useGlobalService;
