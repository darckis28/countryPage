import InputSearch from "../components/InputSearch";
import { useContextCountry } from "../hooks/useContextCountry";
const HeaderSection = () => {
  const { result, setSearch, search } = useContextCountry();
  const handelChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header>
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:justify-between sm:items-center  ">
        <p className="font-bold text-gray-design-two ">
          Found {result.length} countries
        </p>
        <InputSearch
          onChange={handelChange}
          value={search}
        />
      </div>
    </header>
  );
};
export default HeaderSection;
