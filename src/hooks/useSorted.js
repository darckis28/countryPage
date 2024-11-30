import { useEffect, useState } from "react";
import { useGetData } from "./useGetData";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,unMember,independent";
export const useSorted = ({ sort }) => {
  const { landing, data } = useGetData({ url: URL });
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    const newContent = data.toSorted((a, b) => {
      if (sort === "population") return b.population - a.population;
      else if (sort === "area") return b.area - a.area;
      else if (sort === "alphabetical")
        return a.name.common.localeCompare(b.name.common);
    });
    setSorted(newContent);
  }, [sort, data]);
  return {
    landing,
    sorted,
  };
};
