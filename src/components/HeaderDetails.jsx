import DetailsSpan from "./DetailsSpan";

const HeaderDetails = ({ img, name, nameOficial, population, area, alt }) => {
  return (
    <div>
      <img
        src={img}
        alt={alt}
        className="-translate-y-8 rounded-xl max-w-80 mx-auto"
      />
      <h1 className="text-4xl font-bold text-center">{name}</h1>
      <h2 className="text-center text-lg">{nameOficial}</h2>
      <div className="flex flex-col gap-4 items-center justify-center my-5 sm:flex-row ">
        <DetailsSpan
          title={"Population"}
          count={population}
        />
        <DetailsSpan
          title={"Area (km²)"}
          count={area}
        />
      </div>
    </div>
  );
};
export default HeaderDetails;
