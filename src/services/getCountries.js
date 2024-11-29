async function getCountries() {
  const data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,area,region"
  );
  const response = await data.json();
  return response;
}
export default getCountries;
