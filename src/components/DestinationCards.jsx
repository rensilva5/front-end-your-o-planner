import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { useContext } from "react";
import { DestinationsContext } from "../context/DestinationsContext";

export default function DestinationCards({
  place,
  setOpened,
  setOpenedAddReview,
}) {
  const { setDestination } = useContext(DestinationsContext);

  console.log({ place });

  function handleAddReviewButton() {
    setOpenedAddReview(true);
    setDestination(place);
  }
  function handleReviewButton() {
    setOpened(true);
    setDestination(place);
  }

  return (
    // {if id=place.country then you will show the Card}
    <>
        <p className="next-destination">Choose your destination</p>
        <Card className="destination-cards" shadow="sm" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src={place.photoUrl}
              height={233}
              width={350} 
              // alt={place.id}
            />
          </Card.Section>

          <Group className="card-group" mt="md" mb="md" >
            <Text weight={500}>{place.destination}</Text>
            <Badge color="pink" variant="light">
              Description
            </Badge>
          </Group>
          <Text size="sm" color="dimmed">
            {" "}
            {place.description}
          </Text>

          <Group position="center">
            <Button
              onClick={handleAddReviewButton}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Add a review
            </Button>
            <Button onClick={handleReviewButton}>Read Reviews</Button>
          </Group>
        </Card>

    </>
  );
}
