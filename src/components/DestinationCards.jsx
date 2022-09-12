import { Badge, Button, Card, Group, Image, Modal, Text } from "@mantine/core";
// import { DescriptionsContext } from "antd/lib/descriptions";
import { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";
// import { useNavigate } from "react-router-dom";
// import Form from "./AddReviewForm";

export default function DestinationCards({ place, setOpened, setOpenedAddReview }) {
  const { destination, setDestination } = useContext(DestinationsContext)
  const [destinationList, setDestinationList] = useState([]);
  
  console.log({place}) // I am not using it
  //   const { destination, setDestinations } = useContext(DescriptionsContext);

  function handleAddReviewButton () {
    setOpenedAddReview(true)
    setDestination(place)

  }
  function handleReviewButton () {
    setOpened(true)
    setDestination(place)
  }

  return (
    // {if id=place.country then you will show the Card}
    <>
      <Card>
        <p className="next-destination">Choose your destination</p>
        <div>
          {/* <button onClick={ handleDestination }></button> */}
          {/* {place.place} */}
        </div>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
        >
          <Card.Section>
            <Image
              src={place.photoUrl}
              height={160}
              width={200}
              // alt={place.id}
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{place.destination}</Text>
            <Badge color="pink" variant="light">
              Description
            </Badge>
          </Group>
          <Text 
          size="sm" color="dimmed">
            {" "}
            {place.description}
          </Text>

          <Group position="center">
            <Button onClick={handleAddReviewButton}variant="light" color="blue" fullWidth mt="md" radius="md">
              Add a review
            </Button>
              
              {/* <Modal
                title="Add a review">
              <Form />
      </Modal> */}
            <Button onClick={handleReviewButton}>Read Reviews</Button>
          </Group>
        </Card>
      </Card>
      {/* // <div className="destination"></div> */}
    </>
  );
}
