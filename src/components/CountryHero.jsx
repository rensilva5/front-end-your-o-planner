import { Card, Image } from "@mantine/core";
import { useContext } from "react";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";

const CountryHero = ({ countryId }) => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
    // use params
  
  return (
      //Still needs to import Country images respectivaly
    <>
      <h1>Country Hero / needs country name, and img</h1> 
      {/* <Card.Section> */}
          {/* <Image className="country-hero-img" */}
            
            {/* // src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            // src={countryChoice.photoUrl}
            // height={320}
            // width={750}
            // alt={country.id}
            // alt={countryChoice.id} */}
            
          {/* /> */}
      {/* <Image src={countryChoice.photo Url} height={160} width={200} alt={countryChoice.id} /> */}
        {/* </Card.Section> */}
    </>
  );
};

export default CountryHero;
