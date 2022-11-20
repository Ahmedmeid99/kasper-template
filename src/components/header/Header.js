import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import logo from '../../assets/images/logo.png'
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
                    <img src={ logo } alt="img!" />
                </a>
                <nav>
                    <FontAwesomeIcon onClick={ toggleMenu } icon={ faBars } className={ classes['toggle-menu'] } />
                    { menuState && <ul>
                        <li><a href="#" className={ classes.active }>Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
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