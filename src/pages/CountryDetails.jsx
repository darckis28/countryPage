import { useParams } from "react-router-dom";
import Container from "../components/Container";
import HeaderDetails from "../components/HeaderDetails";
import { useGetData } from "../hooks/useGetData";
import MainDetails from "../components/MainDetails";
import CountriesBorder from "../components/CountriesBorder";
import { useEffect } from "react";

const CountryDetails = () => {
  const { country } = useParams();
  const url = `https://restcountries.com/v3.1/name/${country}`;
  const { data } = useGetData({ url });
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza al inicio
  }, [country]);

  return (
    <Container width={"max-w-3xl"}>
      <HeaderDetails
        img={data[0]?.flags?.svg}
        name={data[0]?.name?.common}
        nameOficial={data[0]?.name?.official}
        population={data[0]?.population}
        area={data[0]?.area}
        alt={data[0]?.flags?.alts}
      />
      <MainDetails
        capital={data[0]?.capital}
        continents={data[0]?.continents}
        subregion={data[0]?.subregion}
        currencies={data[0]?.currencies}
        language={data[0]?.languages}
      />
      <CountriesBorder borders={data[0]?.borders} />
    </Container>
  );
};
export default CountryDetails;
