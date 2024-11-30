import { createContext, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import REGIONS from "../constants/regions";
export const ContextCountries = createContext(null);
const Context = ({ children }) => {
  const [sort, setSort] = useState("population");
  const [unMember, setUnMember] = useState(true);
  const [independent, setIndependent] = useState(false);
  const [regions, setRegions] = useState(REGIONS);

  const { landing, content } = useFilter({
    sort,
    unMember,
    independent,
    regions,
  });
  return (
    <ContextCountries.Provider
      value={{
        regions,
        setRegions,
        landing,
        content,
        setSort,
        sort,
        setUnMember,
        unMember,
        independent,
        setIndependent,
      }}
    >
      {children}
    </ContextCountries.Provider>
  );
};
export default Context;
