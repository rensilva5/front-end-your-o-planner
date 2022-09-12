import { Card, Image } from "@mantine/core";
import { useContext } from "react";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";
// import CountryPage from "../pages/CountryPage";

const CountryHero = ({countryId}) => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
    // use params
  
  return (
    <>
      <h1>{countryId || 'Country'}</h1>
      {/* <Image src={countryChoice.photoUrl} height={160} width={200} alt={countryChoice.id} /> */}
    </>
  );
};

export default CountryHero;
