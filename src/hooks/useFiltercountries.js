import { useEffect, useState } from "react";
import { useGetData } from "./useGetData";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,area,region";
export const useFilterCountries = ({ sort }) => {
  const { landing, data } = useGetData({ url: URL });
  const [content, setContent] = useState([]);

  useEffect(() => {
    const newContent = [...data].sort((a, b) => {
      if (sort === "population") return b.population - a.population;
      else if (sort === "area") return b.area - a.area;
      else if (sort === "alphabetical")
        return a.name.common.localeCompare(b.name.common);
    });
    setContent(newContent);
  }, [sort, data]);
  return {
    landing,
    content,
  };
};
