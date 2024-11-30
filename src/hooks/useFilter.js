import { useEffect, useState } from "react";
import { useSorted } from "./useSorted";

export const useFilter = ({ regions, independent, unMember, sort }) => {
  const { landing, sorted } = useSorted({ sort });
  const [content, setContent] = useState([]);
  useEffect(() => {
    setContent(sorted);
    const newContent = [...sorted].filter(
      (data) =>
        (data.unMember === unMember || data.independent === independent) &&
        regions?.includes(data.region)
    );

    setContent(newContent);
  }, [sorted, regions, unMember, independent]);
  return { landing, content };
};
