import { createContext, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import REGIONS from "../constants/regions";
export const ContextCountries = createContext(null);
const Context = ({ children }) => {
  const [sort, setSort] = useState("population");
  const [unMember, setUnMember] = useState(true);
  const [independent, setIndependent] = useState(false);
  const [regions, setRegions] = useState(REGIONS);
  const [search, setSearch] = useState("");
  const { landing, content } = useFilter({
    sort,
    unMember,
    independent,
    regions,
  });
  let result = [];
  if (!search) {
    result = content;
  } else {
    result = content?.filter(
      (data) =>
        data?.name?.common.toLowerCase().includes(search.toLocaleLowerCase()) ||
        data?.region?.toLowerCase().includes(search.toLocaleLowerCase()) ||
        data?.subregion?.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  return (
    <ContextCountries.Provider
      value={{
        search,
        setSearch,
        regions,
        setRegions,
        landing,
        result,
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
