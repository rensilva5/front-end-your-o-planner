import { useContext } from "react";
import { useParams } from "react-router-dom";
import CountryHero from "../components/CountryHero";
import DestinationCards from "../components/DestinationCards";
import { TravelerChoiceContext } from "../context/TravelerChoiceContext";
// import DestinationCards from "../components/DestinationCards";
// this page will have a selection of destinations each
// country will have.
const CountryPage = () => {
    const { countryChoice, setCountryChoice } = useContext(TravelerChoiceContext);
    const { countryId } = useParams()
    console.log({countryChoice})
    return ( 
        <div className="countries">
            <div className="country-place">
                <CountryHero />
                <h1>Details about { countryId }</h1>
                <DestinationCards />
             </div>
        </div>
     )
}
 
export default CountryPage;