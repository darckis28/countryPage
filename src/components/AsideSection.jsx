import CheckBox from "./CheckBox";
import Select from "./Select";
import TitleFilters from "./TitleFilters";

export const AsideSection = () => {
  return (
    <aside>
      <div className="mb-2">
        <TitleFilters>Sort by</TitleFilters>
        <Select name={"sort"}>
          <option value="alphabetical">Alphabetical</option>
          <option value="area">Area(km)</option>
          <option
            selected
            value="population"
          >
            Population
          </option>
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
