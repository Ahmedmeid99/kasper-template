import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Footer.module.css"
import img from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <div className={ classes.footer }>
            <div className="container">
                <a href="#">
                    <img src={ img } alt="logo...!" />
                </a>
                <p>We Are Social</p>
                <div className={ classes.socialicons }>
                    <a href="#"><FontAwesomeIcon className={ classes.icon } icon={ faFacebook } /></a>
                    <a href="#"><FontAwesomeIcon className={ classes.icon } icon={ faTwitter } /></a>
                    <a href="#"><FontAwesomeIcon className={ classes.icon } icon={ faLinkedin } /></a>
                    <a href="#"><FontAwesomeIcon className={ classes.icon } icon={ faHome } /></a>
                </div>
                <p className={ classes.copyright }>&copy; 2023 <span>Kasper</span>All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer