import { useParams } from "react-router-dom";
// this page will have a selection of destinations each
// country will have.
const CountryPage = () => {
    const { countryId } = useParams()
    return ( 
        <div className="countries">
            <div className="country-place">
                <h2> Country details { countryId }</h2>
             <h1>Getting my Country Page ready</h1>
             <h2>Needs a picture of the country</h2>
             <h3>And it needs picture of the destination from that country</h3>
             </div>
        </div>
     )
}
 
export default CountryPage;