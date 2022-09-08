import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import DestinationCards from "./DestinationCards";

const CountryMain = () => {
        const [placeList, setPlaceList] = useState([]);
        useEffect(() => {
            fetch("https://deploy-api-your-o-planner.web.app/destinations")
              .then((result) => result.json())  
              .then((data) => setPlaceList(data))
            //   const destinations = data.filter(
            //   (dest) => dest.choiceDestination === choiceDestination
            //       }
            .catch(console.error);
              }, []);

        return (
            <Container size="xs" px="xs" >
                <Grid spacing="lg">
                {placeList.map((place, index) => (
                  <Grid.Col span={4} key={index}>
                    <DestinationCards place={place} />
                  </Grid.Col>
                ))}
                </Grid>
            </Container>
        )
        //     const { destinations, setDestinations } = useContext(DescriptionsContext);
        //     const { choiceDestination } = useContext(TravelerChoiceContext);
        //     let navigate = useNavigate();
        //   const [destinationList]
}

export default CountryMain