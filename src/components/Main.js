import { useEffect, useState } from "react";

const Main = () => {
  const [taskDestination, setDestinationList] = useState("")
  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/main")
      .then((result) => result.json())
      .then((destinations) => setDestinationList(destinations))
      .catch(console.error);
  }, [setDestinationList]);
  if (!setDestinationList) {
    return <h2>No tasks done yet</h2>;
  }
  return (
    <ul>
      {destinationList.map((destination) => (
        <li key={destination.id}>{destination.task}</li>
      ))}
    </ul>
    // <h3>Getting my Main working also</h3>
  )
};

export default Main;

// https://deploy-api-your-o-planner.web.app/test
