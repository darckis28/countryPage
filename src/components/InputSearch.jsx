import Search from "../icons/Search";
const InputSearch = ({ value, onChange }) => {
  return (
    <form className="relative">
      <input
        onChange={onChange}
        value={value}
        className="bg-gray-design w-full  sm:w-96 pl-11 pr-4 py-3 rounded-xl outline-none focus:outline-blue-disign text-sm font-bold placeholder:text-gray-design-two"
        type="text"
        placeholder="Search by Name, Region, Subregion"
      />
      <span className="absolute top-[10px] left-2 ">
        <Search />
      </span>
    </form>
  );
};
export default InputSearch;
