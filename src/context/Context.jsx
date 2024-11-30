import { createContext, useEffect, useReducer, useState } from "react";
import getCountries from "../services/getCountries";
export const ContextCountries = createContext(null);
const Context = ({ children }) => {
  const [landing, setLanding] = useState(false);
  const [content, setContent] = useState([]);
  const [filterOrder, setFilterOrder] = useState("population");
  useEffect(() => {
    const getContent = async () => {
      try {
        setLanding(true);
        const data = await getCountries();
        setContent(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLanding(false);
      }
    };

    getContent();
  }, []);
  return (
    <ContextCountries.Provider value={{ landing, content }}>
      {children}
    </ContextCountries.Provider>
  );
};
export default Context;
