import { faDesktop, faCog, faPenRuler, faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Services.module.css"
const Services = () => {
    return (
        <div className={ classes.services } id='services'>
            <div className="container"  >
                <div className='main_heading' >
                    <h2> Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eius ullam quia amet dignissimos molestias a sunt nisi,
                        in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>

                </div>

                <div className={ classes['services-container'] } >
                    <div className={ classes.box } >
                        <FontAwesomeIcon icon={ faDesktop } className={ classes.srv_icon } />
                        <div className={ classes.text } >
                            <h3>Vorem amet intuitive</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius ullam quia amet dignissimos molestias a sunt nisi,
                                in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>
                        </div>
                    </div>
                    <div className={ classes.box } >
                        <FontAwesomeIcon icon={ faCog } className={ classes['srv_icon'] } />
                        <div className={ classes.text } >
                            <h3>Vorem amet intuitive</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius ullam quia amet dignissimos molestias a sunt nisi,
                                in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>
                        </div>
                    </div>
                    <div className={ classes.box } >
                        <FontAwesomeIcon icon={ faPenRuler } className={ classes['srv_icon'] } />
                        <div className={ classes.text } >
                            <h3>Vorem amet intuitive</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius ullam quia amet dignissimos molestias a sunt nisi,
                                in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>
                        </div>
                    </div>
                    <div className={ classes.box } >
                        <FontAwesomeIcon icon={ faCamera } className={ classes['srv_icon'] } />
                        <div className={ classes.text } >
                            <h3>Vorem amet intuitive</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eius ullam quia amet dignissimos molestias a sunt nisi,
                                in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services