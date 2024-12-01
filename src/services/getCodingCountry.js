const getCodigCountry = async (code) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const info = await data.json();
    return {
      name: info[0]?.name?.common,
      img: info[0]?.flags?.svg,
      alt: info[0]?.flags?.alt,
    };
  } catch (err) {
    console.log(err);
  }
};
export default getCodigCountry;
