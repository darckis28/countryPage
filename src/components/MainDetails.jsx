import ListDetails from "./ListDetails";

const MainDetails = ({
  capital,
  subregion,
  language,
  currencies,
  continents,
}) => {
  const languages = Object.values(language).join(", ") || "no encontrado";
  const currency = Object.values(currencies)[0]?.name || "no encontrado";

  return (
    <ul>
      <ListDetails
        title={"Capital"}
        details={capital}
      />
      <ListDetails
        title={"Subregion"}
        details={subregion}
      />
      <ListDetails
        title={"Language"}
        details={languages}
      />
      <ListDetails
        title={"Currencies"}
        details={currency}
      />
      <ListDetails
        title={"Continents"}
        details={continents}
      />
    </ul>
  );
};
export default MainDetails;
