import EskeletonTable from "./EskeletonTable";
import Table from "./Table";
import TableRowContent from "./TableRowContent";
import { useContextCountry } from "../hooks/useContextCountry";

const TableSection = () => {
  const { landing, result } = useContextCountry();

  return (
    <div className="flex-1">
      <Table titles={["Flag", "Name", "Population", "Area (km²)", "Region"]}>
        {landing ? (
          <EskeletonTable />
        ) : (
          result?.map((data) => (
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
