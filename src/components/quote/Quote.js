import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Quote.module.css"
const Quote = () => {
    return (
        <div className={ classes.quote }>
            <div className="container">
                <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iure a earum obcaecati aut. Nesciunt architecto ut similique
                    voluptate accusantium quaerat aut ducimus quo eius. Similique
                    ea at esse iure suscipit
                </q>
                <span>Ahmed-eid</span>
            </div>
        </div>
    )
}
export default Quote