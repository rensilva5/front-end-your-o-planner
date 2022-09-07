import { Badge, Button, Group, Image, Text } from "@mantine/core";
import { Card } from "antd"
import { DescriptionsContext } from "antd/lib/descriptions";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";
//It needs pictures per destination, summary, and a button,
// so the user can drop a review.

// export default function DestinationCards ({place}) {
export default function DestinationCards () {
    // const [destinationList, setDestinationList] = useState([]);
    const { destinations, setDestinations } = useContext(DescriptionsContext)
    const { choiceDestination } = useContext(TravelerChoiceContext)
    let navigate = useNavigate();


  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/destinations")
      .then((result) => result.json())
      .then((data) => {//setDestinationList(data)
      console.log('this is', choiceDestination)
        const destinations = data.filter((dest) => dest.choiceDestination === choiceDestination)
    //   setDestinations(destinations)
      })
      .catch(console.error);
  }, []);
    const handleDestination = () => {
        // todo navigate to destination page
    }

    const onClick = (id) => {
        setDestinations(id);
        console.log({id});
    
        navigate(`/country/${id}`);
      };
    
    
    return (
        <>
            <Card>
                <p>Hi, this is my first card</p>
                <div>
                    {/* <button onClick={ handleDestination }></button> */}
                    {/* {place.place} */}
                </div>
        <Card
        shadow="sm"
        p="lg"
        onClick={() => onClick(destinations.id)}
        radius="md"
        withBorder
      >
        <Card.Section>
          <Image
            src={destinations.photoUrl}
            height={160}
            width={200}
            alt={destinations.id}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{destinations.id}</Text>
          <Badge color="pink" variant="light">
            Description
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {" "}
          {destinations.description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Click Here
        </Button>
      </Card>
            </Card>
            
        </>
        // <div className="destination"></div>

    )
};
