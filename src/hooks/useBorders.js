import { useEffect, useState } from "react";
import getCodigCountry from "../services/getCodingCountry";

export const useBorders = ({ data }) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const borders = [];
    const fetchBorders = async () => {
      for (const element of data || []) {
        const border = await getCodigCountry(element);
        borders.push(border);
      }
      setResponse(borders);
    };

    if (data?.length) fetchBorders();
  }, [data]);

  return { response };
};
