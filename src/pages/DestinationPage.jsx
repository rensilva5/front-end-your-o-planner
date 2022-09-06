import { useParams } from "react-router-dom";
// This Page will have destination places with pictures,
// description or summary, and a review button.
const DestinationPage = () => {
  // const { destinationId } = useParams();
  return (
    <>
      <div className="destination-place">
        <h2> destination Page {destinationId}</h2>
        <ul>
          {destinationList.map((place, index) => (
            <ul key={index}>
              <DestinationCards place={place} />
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DestinationPage;
