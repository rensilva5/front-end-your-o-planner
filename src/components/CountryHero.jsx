import { Card, Image } from "@mantine/core";
import { useContext } from "react";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";

const CountryHero = () => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
  
  return (
    <>
      <h1>Country Hero</h1>
      {/* <Card.Section>
          <Image
            src={country.photoUrl}
            height={160}
            width={200}
            alt={country.id}
          />
        </Card.Section> */}
      {/* <Image src={countryChoice.photoUrl} height={160} width={200} alt={countryChoice.id} /> */}
    </>
  );
};

export default CountryHero;