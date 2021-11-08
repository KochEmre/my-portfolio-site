import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_z8ddvvh', 'template_xmmagw4', formRef.current, 'user_GoLMfFfZt39t6X7EIPplb')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +90 554 136 11 16
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@emrekoc.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Kayseri / Turkey
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always avaible for freelancing if the right projects comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "White"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "White"}} type="text" placeholder="Subject" name="user_subject" />
            <input className="c-msg" style={{backgroundColor: darkMode && "#333", color: darkMode && "White"}} type="text" placeholder="Your Contact Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "White"}} rows="5" placeholder="Message" name="message"/>
            <button type="submit">Submit</button>
            {done && "   Thank you"} {/* TODO bura kaldırılacak ya da düzenlenecek. */}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
