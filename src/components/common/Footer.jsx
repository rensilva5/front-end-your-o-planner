import { Layout } from "antd"; // I might use @mintina instead

// import '../styles/Footer.css``' // Pending to add className to be used in CSS

const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <Layout>
            <div style={{ textAlign: "center" }}>
                &copy; Renzo Silva {currentYear} Your-o-planner
            </div>
        </Layout>
    )
}
 
export default Footer;