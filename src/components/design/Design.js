import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import appImg from "../../assets/images/mobile.png";
import classes from "./Design.module.css"
const Design = () => {
    return (
        <div className={ classes.design }>
            <div className={ classes.image }>
                <img src={ appImg } alt="Mobile" />
            </div>
            <div className={ classes.text }>
                <h2>Our Design Comes With...</h2>
                <ul>
                    <li><FontAwesomeIcon icon={ faDesktop } className={ classes.icon } /> Responsive Design</li>
                    <li><FontAwesomeIcon icon={ faDesktop } className={ classes.icon } /> Modern And Clean Design</li>
                    <li><FontAwesomeIcon icon={ faDesktop } className={ classes.icon } /> Clear Code</li>
                    <li><FontAwesomeIcon icon={ faDesktop } className={ classes.icon } /> Browser Frindly</li>
                </ul>
            </div>
        </div>
    )
}
export default Design