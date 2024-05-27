import { createContext, useContext, ReactNode } from "react";
import useGetAbout from "../hooks/useGetAbout";

interface AboutData {
  data: any; // Adjust the type of data according to your actual data structure
  loading: boolean;
  loaded: boolean;
  errors: any[] | undefined; // Adjust the type of errors according to your actual error structure
}

const defaultValue: AboutData = {
  data: null,
  loading: false,
  loaded: false,
  errors: undefined,
};

const AboutContext = createContext<AboutData>(defaultValue);

export const useAboutContext = () => useContext(AboutContext);

interface AboutProviderProps {
  children: ReactNode;
}

export const AboutProvider = ({ children }: AboutProviderProps) => {
  const { data, loading, loaded, errors } = useGetAbout();

  const value: AboutData = {
    data,
    loading,
    loaded,
    errors,
  };

  return (
    <AboutContext.Provider value={value}>
      {children}
    </AboutContext.Provider>
  );
};
