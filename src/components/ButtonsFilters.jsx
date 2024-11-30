import REGIONS from "../constants/regions";
import { useContextCountry } from "../hooks/useContextCountry";
import { Button } from "./Button";
const ButtonsFilters = () => {
  const { setRegions, regions } = useContextCountry();
  const onClick = (e) => {
    const value = e.target.textContent;
    if (regions.includes(value)) {
      setRegions(regions.filter((region) => region !== e.target.textContent));
      return;
    }
    setRegions([...regions, value]);
  };
  return (
    <div className="flex flex-wrap gap-3 w-80">
      {REGIONS.map((region, idx) => (
        <Button
          onClick={onClick}
          conditional={regions}
          key={idx}
        >
          {region}
        </Button>
      ))}
    </div>
  );
};
export default ButtonsFilters;
