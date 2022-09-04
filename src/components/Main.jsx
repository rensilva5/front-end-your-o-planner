import { useEffect, useState } from "react";
// Maybe country Cards instead of DestinationCards below.
import DestinationCards from "./DestinationCards";
// it also needs pictures of the countries.
const Main = () => {
  const [destinationList, setDestinationList] = useState([])
  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/destinations")
      .then(result => result.json())
      .then(destinationList => setDestinationList(destinationList)) //
      .catch(console.error);
  }, [destinationList]);
  if (!setDestinationList) {
    return <h2>Main, add pictures of countries here</h2>;
  }
  return (
    
    <ul>
      {destinationList.map((place) => (
        <ul key={place.id}>
          <DestinationCards place={place} />
        {/* <li>{destination.destination}</li> */}
        </ul>
      ))}
    </ul>
    // <h3>Getting my Main working also</h3>
  )
};

export default Main;

// https://deploy-api-your-o-planner.web.app/test
