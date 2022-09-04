import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
// Double check if I need this component at all.
export default function About () {
    return (
        
        <div id='about'>
            <Navbar />
            <h1>WELCOME TO THE MOST EXTRAORDINARY CONTINENT</h1>
            <h2>AND WHO DOES NOT WANT TO BE IN EUROPE</h2>
            <p>Europe has a the most multicultural land. It contains 51 countries, different languages,
                exrtraordinary landscaping, rich culture, and a variaty of gastronomy.
                History and arquitecture are a huge elements to enjoy and learn.
            </p>
            <Footer />  
        </div>
    )
}