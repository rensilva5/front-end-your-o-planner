import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// This Page will have destination places with pictures,
// description or summary, and a review button.
const DestinationPage = () => {
  const { destinationId } = useParams();
  return ( 
    <>
        <Navbar />
        destination Page {destinationId}
        <Footer />
    </>
  )
};

export default DestinationPage;


