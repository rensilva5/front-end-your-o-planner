import { useParams } from "react-router-dom";
import DestinationCards from "../components/DestinationCards";

const DestinationPage = ({ places }) => {
  const { destinationId } = useParams();

  // Safely access destination places, assuming places[destinationId] is an array.
  const destinationPlaces = places[destinationId] || [];

  return (
    <div className="destination-place">
      <h2>Destination Page {destinationId}</h2>
      {destinationPlaces.length > 0 ? (
        <ul>
          {destinationPlaces.map((place) => (
            <li key={place.id || place.name}>
              <DestinationCards place={place} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No destinations found for this ID.</p>
      )}
    </div>
  );
};

export default DestinationPage;
