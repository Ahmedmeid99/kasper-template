import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import classes from "./Header.module.css"
const Header = () => {
    const [menuState, setMenuState] = useState(true)
    const toggleMenu = () => {
        setMenuState(!menuState)
    }
    return (
        <header>
            <div className={ `${classes.flex} container` }>
                <a href="#" className={ classes.logo }>
                    {/* <img src="" alt="" /> */ }
                    Ahmed
                </a>
                <nav>
                    <FontAwesomeIcon onClick={ toggleMenu } icon={ faBars } className={ classes['toggle-menu'] } />
                    { menuState && <ul>
                        <li><a href="#" className={ classes.active }>Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> }
                    <div className={ classes.form }>
                        <FontAwesomeIcon icon={ faSearch } className={ classes['search-icon'] } />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header