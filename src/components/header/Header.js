import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import classes from "./Header.module.css"
const Header = () => {
    const [menuState, setMenuState] = useState(false)
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
                        <li><a onClick={ toggleMenu } href="#" className={ classes.active }>Home</a></li>
                        <li><a onClick={ toggleMenu } href="#">Services</a></li>
                        <li><a onClick={ toggleMenu } href="#">Portfolio</a></li>
                        <li><a onClick={ toggleMenu } href="#">About</a></li>
                        <li><a onClick={ toggleMenu } href="#">Pricing</a></li>
                        <li><a onClick={ toggleMenu } href="#">Contact</a></li>
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