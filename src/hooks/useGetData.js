import { useEffect, useState } from "react";
import getCountries from "../services/getCountries";

export const useGetData = ({ url }) => {
  const [landing, setLanding] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getContent = async () => {
      try {
        setLanding(true);
        const response = await getCountries(url);
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLanding(false);
      }
    };

    getContent();
  }, [url]);
  return { landing, data };
};
