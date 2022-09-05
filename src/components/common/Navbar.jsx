// import {logo} from './src/components/Navbar.js'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            Logo
            <h1>Your-o-planner +1 561-900-8952 or conctact us / and login optional</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}
 
export default Navbar;