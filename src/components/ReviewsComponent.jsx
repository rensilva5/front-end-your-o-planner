import { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";

const ReviewsComponent = () => {
  const { destination, setDestination } = useContext(DestinationsContext);
  const [reviews, setReviews] = useState();
  console.log({ destination });
  return <p>{destination}</p>;
};

export default ReviewsComponent;
