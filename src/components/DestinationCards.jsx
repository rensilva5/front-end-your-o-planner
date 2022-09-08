import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
// import { DescriptionsContext } from "antd/lib/descriptions";
import { useContext, useState } from "react";  // Not using it yet
// import { useNavigate } from "react-router-dom";

// Button and link, so the user can drop a review.

export default function DestinationCards({ place }) {
  const [destinationList, setDestinationList] = useState([]);  // I am not using it
//   const { destination, setDestinations } = useContext(DescriptionsContext);
  
    // const destinations = data.filter(
    //   (dest) => dest.choiceDestination === choiceDestination
    // );
    //   setDestinations(destinations)
    // })
    //   .catch(console.error);
//   }, []);
//   const handleDestination = () => {
    // todo navigate to destination page
//   };
//   const onClick = (id) => {
//     setDestinations(id);
//     console.log({ id });

//     navigate(`/country/${id}`);
//   };

  return (
    <>
        <Card>
        <p>This is your destination</p>
        <div>
          {/* <button onClick={ handleDestination }></button> */}
          {/* {place.place} */}
        </div>
        <Card
        shadow="sm"
        p="lg"
        // onClick={() => onClick(destinations.id)}
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

        <Text size="sm" color="dimmed">
          {" "}
          {place.reviews}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Add a review
        </Button>
      </Card> 
      </Card>
    {/* // <div className="destination"></div> */}
    </>
  );
}