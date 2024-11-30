async function getCountries(url) {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}
export default getCountries;
