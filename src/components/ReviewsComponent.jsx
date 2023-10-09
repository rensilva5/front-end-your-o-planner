import { useContext, useState } from "react";
import { DestinationsContext } from "../context/DestinationsContext";

const ReviewsComponent = () => {
  const { destination, setDestination } = useContext(DestinationsContext);
  //   const [reviews, setReviews] = useState();
  console.log({ destination });

  return (
    <>
      <div>
        {destination.reviews.map((reviewItems, index) => (
          <p key={index}>{reviewItems}</p>
        ))}
      </div>
    </>
  );
};

export default ReviewsComponent;