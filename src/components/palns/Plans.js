import classes from "./Plans.module.css"
const Plans = () => {
    return (
        <div className={ classes.pricing } id='pricing'>
            <div className="container">
                <div className="main_heading">
                    <h2>Pricing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum inventore minima modi architecto soluta maiores corporis tempora tempore corrupti.</p>
                </div>
                <div className={ classes.plans }>
                    <div className={ classes.plan }>
                        <div className={ classes.header }>
                            <span>Basic</span>
                            <div className={ classes.price }>19</div>
                        </div>
                        <ul className={ classes.items }>
                            <li>Feature No 1</li>
                            <li>Extra Feature</li>
                            <li>Extra Feature No 2</li>
                            <li>Feature</li>
                        </ul>
                        <footer>
                            <a href="#" className={ classes.action }>Buy Now</a>
                        </footer>
                    </div>
                    <div className={ classes.plan }>
                        <div className={ classes.header }>
                            <span>Premium</span>
                            <div className={ classes.price }>32</div>
                        </div>
                        <ul className={ classes.items }>
                            <li>Feature No 1</li>
                            <li>Extra Feature No 2</li>
                            <li>Feature</li>
                            <li>Extra Feature</li>
                        </ul>
                        <footer>
                            <a href="#" className={ classes.action }>Buy Now</a>
                        </footer>
                    </div>
                    <div className={ classes.plan }>
                        <div className={ classes.header }>
                            <span>Pro</span>
                            <div className={ classes.price }>39</div>
                        </div>
                        <ul className={ classes.items }>
                            <li>Feature No 1</li>
                            <li>Extra Feature</li>
                            <li>Extra Feature No 2</li>
                            <li>Feature</li>
                        </ul>
                        <footer>
                            <a href="#" className={ classes.action }>Buy Now</a>
                        </footer>
                    </div>
                    <div className={ classes.plan }>
                        <div className={ classes.header }>
                            <span>Platinum</span>
                            <div className={ classes.price }>49</div>
                        </div>
                        <ul className={ classes.items }>
                            <li>Feature No 1</li>
                            <li>Extra Feature</li>
                            <li>Extra Feature No 2</li>
                            <li>Feature</li>
                        </ul>
                        <footer>
                            <a href="#" className={ classes.action }>Buy Now</a>
                        </footer>
                    </div>
                </div>
                <div className={ classes.text }>
                    <p>Contact us if you have special request</p>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}
export default Plans