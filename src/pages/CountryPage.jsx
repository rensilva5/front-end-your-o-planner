import { useParams } from "react-router-dom";
import CountryHero from "../components/CountryHero";
// import DestinationCards from "../components/DestinationCards";
// this page will have a selection of destinations each
// country will have.
const CountryPage = () => {
    const { countryId } = useParams()
    return ( 
        <div className="countries">
            <div className="country-place">
                <CountryHero />
                <h1>Details about { countryId }</h1>
                {/* <DestinationCards /> */}
             <h2>Getting my CountryPage.jsx ready</h2>
             <h3>Needs a picture of the country</h3>
             <h4>And it needs picture of the destination from that country</h4>
             </div>
        </div>
     )
}
 
export default CountryPage;