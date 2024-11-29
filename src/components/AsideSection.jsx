import CheckBox from "./CheckBox";
import Select from "./Select";
import TitleFilters from "./TitleFilters";

export const AsideSection = () => {
  return (
    <aside>
      <div className="mb-2">
        <TitleFilters>Sort by</TitleFilters>
        <Select name={"sort"}>
          <option
            selected
            defaultValue="asc"
            disabled
            hidden
          >
            Population
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
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
