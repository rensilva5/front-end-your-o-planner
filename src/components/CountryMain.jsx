import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import DestinationCards from "./DestinationCards";
import { Modal, Button, Group } from "@mantine/core";
import ReviewsComponent from "./ReviewsComponent";
import AddReviewForm from "./AddReviewForm";

const CountryMain = ({ countryId }) => {
  const [placeList, setPlaceList] = useState([]);
  const [opened, setOpened] = useState(false);
  const [openedAddReview, setOpenedAddReview] = useState(false)

  useEffect(() => {
    fetch(`https://deploy-api-your-o-planner.web.app/destinations`)
      .then((result) => result.json())
      .then((data) => {
        const destinations = data.filter(
          (destination) => destination.country === countryId
        );
        setPlaceList(destinations);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Container size="sm" px="sm">
        <Grid spacing="lg">
          {placeList.map((place, index) => (
            <Grid.Col span={4} key={index}>

              {/* check this */}

              {/* <DestinationCards place={place} setOpened={setOpened}  /> */}
              <DestinationCards place={place} setOpened={setOpened} setOpenedAddReview={setOpenedAddReview} />
              {/* <DestinationCards place={place} openedAddReviewsetOpened={openedAddReview}  /> */}
            </Grid.Col>
          ))}
        </Grid>
      </Container>

     <Modal
        opened={openedAddReview}
        onClose={() => setOpenedAddReview(false)}
        title="Add a review"
      >
        <AddReviewForm countryId={countryId}/>
      </Modal>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Check travelers' reviews! ✈️"
      >
        <ReviewsComponent />
      </Modal>

    </>
  );
  //     const { destinations, setDestinations } = useContext(DescriptionsContext);
  //     const { choiceDestination } = useContext(TravelerChoiceContext);
  //     let navigate = useNavigate();
  //   const [destinationList]
};

export default CountryMain;
