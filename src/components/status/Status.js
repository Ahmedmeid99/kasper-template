import { faMugHot, faFolder, faEnvelope, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classes from "./Status.module.css"
const Status = () => {
    return (
        <div className={ classes.status }>
            <div className="container">
                <div className={ classes.box }>
                    <div className={ classes['icon-container'] }>
                        <FontAwesomeIcon icon={ faMugHot } className={ classes.icon } />
                    </div>
                    <h3 className={ classes.num }>1,236</h3>
                    <p>Coffee Drinks</p>
                </div>
                <div className={ classes.box }>
                    <div className={ classes['icon-container'] }>
                        <FontAwesomeIcon icon={ faFolder } className={ classes.icon } />
                    </div>
                    <h3 className={ classes.num }>256</h3>
                    <p>Completed Projects</p>
                </div>
                <div className={ classes.box }>
                    <div className={ classes['icon-container'] }>
                        <FontAwesomeIcon icon={ faEnvelope } className={ classes.icon } />
                    </div>
                    <h3 className={ classes.num }>1,743</h3>
                    <p>Mail Sent</p>
                </div>
                <div className={ classes.box }>
                    <div className={ classes['icon-container'] }>
                        <FontAwesomeIcon icon={ faTrophy } className={ classes.icon } />
                    </div>
                    <h3 className={ classes.num }>16</h3>
                    <p>Awards Received</p>
                </div>
            </div>
        </div>
    )
}
export default Status