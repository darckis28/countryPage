import { useEffect, useState } from "react";
import EskeletonTable from "./EskeletonTable";
import Table from "./Table";
import getCountries from "../services/getCountries";
import TableRowContent from "./TableRowContent";

const TableSection = () => {
  const [landing, setLanding] = useState(false);
  const [content, setContent] = useState([]);
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
    <div className="flex-1">
      <Table titles={["Flag", "Name", "Population", "Area (km²)", "Region"]}>
        {landing ? (
          <EskeletonTable />
        ) : (
          content.map((data) => (
            <TableRowContent
              key={data.name.common}
              img={data.flags.svg}
              name={data.name.common}
              region={data.region}
              km={data.area}
              population={data.population}
            />
          ))
        )}
      </Table>
    </div>
  );
};
export default TableSection;
