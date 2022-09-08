import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
// Maybe country Cards instead of DestinationCards below.
import CountryCards from "./CountryCards";
// it also needs pictures of the countries.

const Main = () => {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/countries")
      .then((result) => result.json())
      .then((data) => setCountryList(data))
      .catch(console.error);
  }, []);
  
  return (
    <Container size="xs" px="xs" >
    <Grid spacing="lg">
      {countryList.map((country, index) => (
        <Grid.Col span={4} key={index}>
          <CountryCards country={country} />
        </Grid.Col>
      ))}
    </Grid>
  </Container>
);
};

export default Main;