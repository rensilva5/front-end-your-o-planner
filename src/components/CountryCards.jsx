import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";
// import { Card } from 'antd'

export default function CountryCards({ country }) {
  const { setBestfor, setCountry } = useContext(TravelerChoiceContext);
  let navigate = useNavigate();

  const onClickFrance = () => {
    setBestfor("france");
    setCountry("france");
    navigate("/destinations");
  };

  const onClickGermany = () => {
    setBestfor("germany");
    setCountry("germany");
    navigate("/destinations");
  };

  const onClickGreece = () => {
    setBestfor("greece");
    setCountry("greece");
    navigate("/destinations");
  };

  const onClick = (id) => {
    navigate(`/country/${id}`);
  };
  const onClickItaly = () => {
    setBestfor("italy");
    setCountry("italy");
    navigate("/destinations");
  };

  const onClickSpain = () => {
    setBestfor("spain");
    setCountry("spain");
    navigate("/destinations");
  };

  const onClickUnitedKingdom = () => {
    setBestfor("unitedKingdom");
    setCountry("unitedKingdom");
    navigate("/destinations");
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
