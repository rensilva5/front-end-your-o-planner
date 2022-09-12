import { Container } from "@mantine/core";
import { Link } from "react-router-dom";
import newlogo from "../../assets/newlogo.png"

const Navbar = () => {
    return (
        <>
            <div className="top-bar">
                <h5 className="head-title">
            YOUR-O-PLANNER
                </h5>
                <h5 className="contact-number">+1 561-900-9999</h5>
            </div>
        <Container className="header">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src={newlogo} width="50" height="50" />WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
        </Container>
        </>
    )
}
 
export default Navbar;