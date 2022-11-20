import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons"

import { useSelector, useDispatch } from "react-redux"
import classes from "./Portfolio.module.css"
import projectsActions from "../../redux/projectsSlice";
import img1 from '../../assets/images/shuffle-01.jpg'
import img2 from '../../assets/images/shuffle-02.jpg'
import img3 from '../../assets/images/shuffle-03.jpg'
import img4 from '../../assets/images/shuffle-04.jpg'
import img5 from '../../assets/images/shuffle-05.jpg'
import img6 from '../../assets/images/shuffle-06.jpg'
import img7 from '../../assets/images/shuffle-07.jpg'
import img8 from '../../assets/images/shuffle-08.jpg'
const Portfolio = () => {
    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8]
    const dispatch = useDispatch()

    const FilteredProjects = useSelector((state) => state.projects.filtered)
    return (
        <div className={ classes.portfolio } id='portfolio'>
            <div className="container">
                <div className='main_heading' >
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eius ullam quia amet dignissimos molestias a sunt nisi</p>
                </div>
            </div>
            <ul className={ classes.shuffle }>
                <li onClick={ () => dispatch(projectsActions.setAllProjects()) } className={ classes.active } >All</li>
                <li onClick={ () => dispatch(projectsActions.filterBy('app')) }>App</li>
                <li onClick={ () => dispatch(projectsActions.filterBy('Potography')) }>Photo</li>
                <li onClick={ () => dispatch(projectsActions.filterBy('web')) }>Web</li>
                <li onClick={ () => dispatch(projectsActions.filterBy('print')) }>Print</li>
            </ul>
            <div className={ classes['imgs_container'] }>
                { FilteredProjects.map((project) =>
                    <div className={ classes.box }>
                        <img src={ imgs[project.imgindex] } alt="img !" />
                        <div className={ classes.caption }>
                            <h4>{ project.title }</h4>
                            <p>{ project.type }</p>
                        </div>
                    </div>
                ) }
            </div>
            <a href='#' className={ classes.more }>More</a>
        </div>
    )
}
export default Portfolio