import video from "../../assets/images/awesome-video.mp4"
import classes from "./Video.module.css"
const Video = () => {
    return (
        <>
            <div className={ classes.video }>
                <video autoPlay muted loop>
                    <source src={ video } typeof="video/mp4" />
                </video>
                <div className={ classes.text }>
                    <h2>Super Awesome Video Here</h2>
                    <p>Its All You Need</p>
                    <button>See More</button>
                </div>
            </div>
        </>
    )
}
export default Video