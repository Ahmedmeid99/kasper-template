import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import List from './imgsList'
import img1 from "../../assets/images/landing.jpg"
import img2 from "../../assets/images/design-features.jpg"
import img3 from "../../assets/images/subscribe.jpg"
import classes from "./Landing.module.css"
import { useState } from "react"
const imgList = new List()
imgList.append(img1)
imgList.append(img2)
imgList.append(img3)
console.log(imgList.length())
const Landing = () => {
    const [imgState, setImgState] = useState(img1)

    const nextBackground = () => {
        imgList.next()
        setImgState(imgList.getElement())
    }

    const prevBackground = () => {
        imgList.prev()
        setImgState(imgList.getElement())
    }
    const changeImgTo = (position) => {
        imgList.moveTo(position)
        setImgState(imgList.getElement())
    }
    return (
        <div className={ classes.landing } style={ { backgroundImage: `url(${imgState} )` } } >
            <div className={ classes.overlay }></div>
            <div className={ classes.text }>
                <div className={ classes.content }>
                    <h2>
                        Hello World!<br />
                        We Are Kasper We Make Art.
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eius ullam quia amet dignissimos molestias a sunt nisi,
                        in numquam maxime rem rerum quas fugit. Minima sint suscipit debitis unde error.</p>
                </div>
            </div>
            <FontAwesomeIcon onClick={ prevBackground } icon={ faAngleLeft } className={ `${classes.change_background} ${classes.left}` } />
            <FontAwesomeIcon onClick={ nextBackground } icon={ faAngleRight } className={ `${classes.change_background} ${classes.right}` } />
            <ul className={ classes.bullets }>
                <li onClick={ () => changeImgTo(0) } className={ imgList.currPos() === 0 && classes.active }></li>
                <li onClick={ () => changeImgTo(1) } className={ imgList.currPos() === 1 && classes.active }></li>
                <li onClick={ () => changeImgTo(2) } className={ imgList.currPos() === 2 && classes.active }></li>
            </ul>
        </div >
    )
}
export default Landing