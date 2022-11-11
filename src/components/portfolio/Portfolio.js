import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import shuffle1 from '../../assets/images/shuffle-01.jpg'
import shuffle2 from '../../assets/images/shuffle-02.jpg'
import shuffle3 from '../../assets/images/shuffle-03.jpg'
import shuffle4 from '../../assets/images/shuffle-04.jpg'
import shuffle5 from '../../assets/images/shuffle-05.jpg'
import shuffle6 from '../../assets/images/shuffle-06.jpg'
import shuffle7 from '../../assets/images/shuffle-07.jpg'
import shuffle8 from '../../assets/images/shuffle-08.jpg'
import classes from "./Portfolio.module.css"
const boxes = [
    { imgLink: '', title: '', type: '' }
]
const Portfolio = () => {
    return (
        <div className={ classes.portfolio }>
            <div className="container">
                <div className='main_heading' >
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eius ullam quia amet dignissimos molestias a sunt nisi</p>
                </div>
            </div>
            <ul className={ classes.shuffle }>
                <li className={ classes.active }>own</li>
                <li>react</li>
                <li>react</li>
                <li>react</li>
                <li>react</li>
            </ul>
            {/* <div className={classes['imgs_container']}>
                <div className={classes.box}>
                    <img src={shuffle1} alt="img !" />
                    <div className={classes.caption}>
                        <h4>Awesome Image</h4>
                        <p>Potography</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Portfolio