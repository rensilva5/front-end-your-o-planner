import { Card } from "antd"

export default function DestinationCards ({place}) {
    const handleDestination = () => {
        // todo navigate to destination page
    }
    return (
        <>
            <Card>
                <p>Hi, this is my first card</p>
                <div>
                    <button onClick={ handleDestination }></button>
                    { place.destination }
                </div>
            </Card>
        </>
        // <div className="destination"></div>
    )
};
