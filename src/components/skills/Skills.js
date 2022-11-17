import classes from "./Skills.module.css"
import person1 from "../../assets/images/skills-01.jpg"
import person2 from "../../assets/images/skills-02.jpg"
const Skills = () => {

    return (
        <div className={ classes['skills-section'] }>
            <div className="container">
                <div className={ classes.testimonials }>
                    <h3>Testimonials</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem ipsa unde quia veniam minima reiciendis quam maiores consectetur voluptatum?</p>
                    <div className={ classes.people }>
                        <div className={ classes.person }>
                            <img src={ person1 } alt="img...!" />
                            <div className={ classes.text }>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius reprehenderit, laboriosam consectetur minus similique.</p>
                                <div className={ classes.name }>Ahmed-mo-eid</div>
                            </div>
                        </div>
                        <div className={ classes.person }>
                            <img src={ person2 } alt="img...!" />
                            <div className={ classes.text }>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius reprehenderit, laboriosam consectetur minus similique.</p>
                                <div className={ classes.name }>Ali-albakry</div>
                            </div>
                        </div>
                        <ul className={ classes.bullets }>
                            <li></li>
                            <li className={ classes.active }></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className={ classes.skills }>
                    <h3>Skills</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem ipsa unde quia veniam minima reiciendis quam maiores consectetur voluptatum?</p>
                    <div className={ classes['our-skill-prog'] }>

                        <div className={ classes['prog-holder'] }>
                            <h4>Javascript</h4>
                            <div className={ classes.prog }>
                                <span style={ { width: '80%' } } data-progress="80%"></span>
                            </div>
                        </div>
                        <div className={ classes['prog-holder'] }>
                            <h4>React</h4>
                            <div className={ classes.prog }>
                                <span style={ { width: '85%' } } data-progress="85%"></span>
                            </div>
                        </div>
                        <div className={ classes['prog-holder'] }>
                            <h4>Node</h4>
                            <div className={ classes.prog }>
                                <span style={ { width: '70%' } } data-progress="70%"></span>
                            </div>
                        </div>
                        <div className={ classes['prog-holder'] }>
                            <h4>html/css</h4>
                            <div className={ classes.prog }>
                                <span style={ { width: '90%' } } data-progress="90%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills