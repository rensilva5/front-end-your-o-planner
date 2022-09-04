import { useParams } from "react-router-dom";

const DestinationPage = () => {
  const { destinationId } = useParams();
  return ( 
    <>
        destination Page {destinationId}
    </>
  )
};

export default DestinationPage;
