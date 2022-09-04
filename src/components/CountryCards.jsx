import { Card } from 'antd'
// This component will have Cards with countries,
// and a link from its country to their destinations.

export default function CountryCards () {
    return (
        <>
        <Card>
            <p>these are my country cards,
               and they will be in Main Component
            </p>
            <div className="country-cards"></div>
        </Card>
        </>
    )
}

