import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Footer.module.css"
import img from "../../assets/images/logo.png"

const Footer = () => {
    return (
        <div className={ classes.footer }>
            <div className="container">
                <img src={ img } alt="logo...!" />
                <p>We Are Social</p>
                <div className={ classes.socialicons }>
                    <FontAwesomeIcon className={ classes.icon } icon={ faFacebook } />
                    <FontAwesomeIcon className={ classes.icon } icon={ faTwitter } />
                    <FontAwesomeIcon className={ classes.icon } icon={ faLinkedin } />
                    <FontAwesomeIcon className={ classes.icon } icon={ faHome } />
                </div>
                <p className={ classes.copyright }>&copy; 2023 <span>Kasper</span>All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer