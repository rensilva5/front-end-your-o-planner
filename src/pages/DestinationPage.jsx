import { useParams } from "react-router-dom";
// This Page will have destination places with pictures,
// description or summary, and a review button.
const DestinationPage = () => {
  const { destinationId } = useParams();
  return ( 
    <>
        destination Page {destinationId}
    </>
  )
};

export default DestinationPage;


