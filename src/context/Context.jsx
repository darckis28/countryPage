import { createContext, useState } from "react";
import { useFilterCountries } from "../hooks/useFiltercountries";
export const ContextCountries = createContext(null);
const Context = ({ children }) => {
  const [sort, setSort] = useState("population");

  const { landing, content } = useFilterCountries({ sort });
  return (
    <ContextCountries.Provider value={{ landing, content, setSort, sort }}>
      {children}
    </ContextCountries.Provider>
  );
};
export default Context;
