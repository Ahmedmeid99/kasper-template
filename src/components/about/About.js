import classes from "./About.module.css"
import img from "../../assets/images/about.png"
const About = () => {
    return (
        <>
            <div className={ classes.about } id='about'>
                <div className='container'>
                    <div className='main_heading'>
                        <h2>About Us</h2>
                        <p>consectetur adipisicing elit.
                            Eius ullam quia amet dignissimos molestias a sunt nisi,
                            in numquam maxime rem rerum quas fugit.</p>
                    </div>
                    <img src={ img } alt="img...!" />
                </div>
            </div>
        </>
    )
}
export default About