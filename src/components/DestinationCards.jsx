import { Card } from "antd"
//It needs pictures per destination, summary, and a button,
// so the user can drop a review.

export default function DestinationCards ({place}) {
    onst [destinationList, setDestinationList] = useState([]);
  useEffect(() => {
    fetch("https://deploy-api-your-o-planner.web.app/destinations")
      .then((result) => result.json())
      .then((data) => setDestinationList(data)) //
      .catch(console.error);
  }, []);
    const handleDestination = () => {
        // todo navigate to destination page
    }
    return (
        <>
            <Card>
                <p>Hi, this is my first card</p>
                <div>
                    <button onClick={ handleDestination }></button>
                    {place.country}
                </div>
            </Card>
        </>
        // <div className="destination"></div>
    )
};
