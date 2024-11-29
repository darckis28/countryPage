import InputSearch from "../components/InputSearch";
const HeaderSection = () => {
  return (
    <header>
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:justify-between sm:items-center  ">
        <p className="font-bold text-gray-design-two ">Found 234 countries</p>
        <InputSearch />
      </div>
    </header>
  );
};
export default HeaderSection;
