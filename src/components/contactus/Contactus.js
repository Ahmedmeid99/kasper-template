import classes from "./Contactus.module.css"
const Contactus = () => {
    return (
        <div className={ classes.contactus } id='contact'>
            <div className="container">
                <div className="main_heading">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates quasi nesciunt aut nisi obcaecati optio,
                        alias delectus perferendis nam. Quod sequi repellat
                        sunt cupiditate nesciunt magni, repellendus odio dolorum voluptas!</p>
                </div>
                <div className={ classes['form-container'] }>
                    <form onSubmit={ (e) => e.preventDefault() }>
                        <input className={ classes.input } type="text" name="userName" placeholder="Your Name" />
                        <input className={ classes.input } type="email" name="userEmail" placeholder="Your Mail" />
                        <textarea className={ classes.input } name="userMessage" placeholder="Your Message"></textarea>
                        <input type="submit" value="send message" />
                    </form>
                    <div className={ classes.info }>
                        <div className={ classes.one }>
                            <h3>Get In Touch</h3>
                            <span>+00 123.456.789</span>
                            <span>+00 123.456.789</span>
                        </div>
                        <div className={ classes.one }>
                            <h3>Where We Are</h3>
                            <span>Awesome Adress 17</span>
                            <span>New Yourk, NYC</span>
                            <span>123 456 789</span>
                            <span>USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contactus