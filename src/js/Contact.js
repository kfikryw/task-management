import emailLogo from '../css/image/email (1).png';
function Contact(){
    return(
        <div>
            <p className="section_text_p1">Get In Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img className="icon" src={emailLogo} alt="email"></img>
                    <p><a href="mailto:kfikryw@gmail.com">kfikryw@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img className="icon" src={emailLogo} alt="LinkedIn"></img>
                    <p><a href="https://www.linkedin.com/in/wan-ahmad-fikry-wan-effendy-b41b81240/">LinkedIn</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contact;