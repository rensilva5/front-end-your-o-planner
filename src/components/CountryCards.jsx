import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";

// import { Card } from 'antd'

//-//Products

export default function CountryCards({ country }) {
  const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);

  let navigate = useNavigate();
  const onClick = (id) => {
    setCountryChoice(id);
    console.log({ id });

    navigate(`/country/${id}`);
  };

  return (
    <>
      <h2>Select Country</h2>
      <Card
        shadow="sm"
        p="lg"
        onClick={() => onClick(country.id)}
        radius="md"
        withBorder
      >
        <Card.Section>
          <Image
            src={country.photoUrl}
            height={160}
            width={200}
            alt={country.id}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{country.id}</Text>
          <Badge color="pink" variant="light">
            Description
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {" "}
          {country.description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Click Here
        </Button>
      </Card>
    </>
  );
}
