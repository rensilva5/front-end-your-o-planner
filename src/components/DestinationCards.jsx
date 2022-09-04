import { Card } from "antd"

export default function DestinationCards ({place}) {
    return (
        <>
            <Card>
                <p>Hi, this is my first card</p>
                <div>
                    { place.destination }
                </div>
            </Card>
        </>
        // <div className="destination"></div>
    )
};
