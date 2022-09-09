// import {logo} from './src/components/Navbar.js'
import { Container } from "@mantine/core";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Container>
        <nav className="navbar">
            
            {/* Maybe a Logo */}
            <h1>YOUR-O-PLANNER +1 561-900-8952 to conctact us</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
        </Container>
    )
}
 
export default Navbar;