import { Card, Image } from "@mantine/core";
import { useContext } from "react";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";

const CountryHero = ({countryId}) => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
    // use params
  
  return (
    <>
      <h1>Country Hero</h1>
      {/* <Card.Section>
          <Image
            src={country.photoUrl}  //countryChoice ???
            height={160}
            width={200}
            alt={country.id}        //countryChoice ???
          />
        </Card.Section> */}
      {/* <Image src={countryChoice.photoUrl} height={160} width={200} alt={countryChoice.id} /> */}
    </>
  );
};

export default CountryHero;
