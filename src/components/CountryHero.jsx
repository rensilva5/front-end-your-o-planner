import { Card, Image } from "@mantine/core";
import { useContext } from "react";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";
// import CountryPage from "../pages/CountryPage";

const CountryHero = ({countryId}) => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
    // use params
  
  return (
    <>
      <h1>Country Hero</h1>
      {/* <Card.Section>
          <Image
            src={country.photoUrl}
            src={countryChoice.photoUrl}
            height={160}
            width={200}
            alt={country.id}
            alt={countryChoice.id}
            
          />
        </Card.Section>
      <Image src={countryChoice.photoUrl} height={160} width={200} alt={countryChoice.id} /> */}
    </>
  );
};

export default CountryHero;
