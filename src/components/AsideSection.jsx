import { useContextCountry } from "../hooks/useContextCountry";
import ButtonsFilters from "./ButtonsFilters";
import CheckBox from "./CheckBox";
import Select from "./Select";
import TitleFilters from "./TitleFilters";

export const AsideSection = () => {
  const { setSort, sort, setUnMember, unMember, independent, setIndependent } =
    useContextCountry();
  function sortFilter(e) {
    setSort(e.target.value);
  }
  function onChangeIndependent(e) {
    setIndependent(e.target.checked);
  }
  function onChangeUnMember(e) {
    setUnMember(e.target.checked);
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
        <ButtonsFilters />
      </div>
      <div className="mb-2">
        <TitleFilters>Status</TitleFilters>
        <CheckBox
          value={unMember}
          onChange={onChangeUnMember}
          id={"member"}
          label={"Member of the United Nations"}
        />
        <CheckBox
          onChange={onChangeIndependent}
          value={independent}
          id={"independent"}
          label={"Independent"}
        />
      </div>
    </aside>
  );
};
