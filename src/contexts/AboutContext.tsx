import { createContext, useContext, ReactNode } from "react";
import useGetAbout from "../hooks/useGetAbout";

interface AboutData {
  data: any;
  loading: boolean;
  loaded: boolean;
  errors: string | undefined;
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
