import Search from "../icons/Search";
const InputSearch = () => {
  return (
    <form className="relative">
      <input
        className="bg-gray-design w-full pl-11 pr-4 py-3 rounded-xl outline-none focus:outline-blue-disign text-sm font-bold placeholder:text-gray-design-two"
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
