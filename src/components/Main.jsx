import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import CountryCards from "./CountryCards";

const Main = () => {
  const [countryList, setCountryList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/countries")
      .then((result) => result.json())
      .then((data) => setCountryList(data))
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch countries data.");
      });
  }, []);

  return (
    <Container size="md" px="md">
      {error ? (
        <p>{error}</p>
      ) : (
        <Grid spacing="lg">
          {countryList.map((country) => (
            <Grid.Col span={4} key={country.id || country.name}>
              {" "}
              {/* Assuming `country.id` or `country.name` is unique */}
              <CountryCards country={country} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Main;
