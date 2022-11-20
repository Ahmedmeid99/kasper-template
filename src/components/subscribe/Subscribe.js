import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Subscribe.module.css"
const Subscribe = () => {
    return (
        <div className={ classes.subscribe }>
            <div className="container">
                <form action="">
                    <FontAwesomeIcon icon={ faEnvelope } className={ classes.icon } />
                    <input type="email" name="email" placeholder="You Email" />
                    <input type="submit" name="subscribe" />
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas a excepturi iste tempora rem vitae assumenda aliquid ratione iusto.</p>
            </div>
        </div>
    )
}
export default Subscribe