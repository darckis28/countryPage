import { useContextCountry } from "../hooks/useContextCountry";
import CheckBox from "./CheckBox";
import Select from "./Select";
import TitleFilters from "./TitleFilters";

export const AsideSection = () => {
  const { setSort, sort } = useContextCountry();
  function sortFilter(e) {
    setSort(e.target.value);
  }
  return (
    <aside>
      <div className="mb-2">
        <TitleFilters>Sort by</TitleFilters>
        <Select
          value={sort}
          name={"sort"}
          onChange={sortFilter}
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="area">Area(km)</option>
          <option value="population">Population</option>
        </Select>
      </div>
      <div className="mb-2">
        <TitleFilters>Region</TitleFilters>
      </div>
      <div className="mb-2">
        <TitleFilters>Status</TitleFilters>
        <CheckBox
          id={"member"}
          label={"Member of the United Nations"}
        />
        <CheckBox
          id={"independent"}
          label={"Independent"}
        />
      </div>
    </aside>
  );
};
