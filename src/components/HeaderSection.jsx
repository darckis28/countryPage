import InputSearch from "../components/InputSearch";
import { useContextCountry } from "../hooks/useContextCountry";
const HeaderSection = () => {
  const { content } = useContextCountry();
  return (
    <header>
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:justify-between sm:items-center  ">
        <p className="font-bold text-gray-design-two ">
          Found {content.length} countries
        </p>
        <InputSearch />
      </div>
    </header>
  );
};
export default HeaderSection;
