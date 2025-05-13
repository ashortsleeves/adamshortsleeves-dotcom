import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const recaptchaRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const btnRef = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    form.current.className = 'as-sending';
    btnRef.current.value = "Sending...";
    btnRef.current.disabled = true;

    if (!captchaValue) {
      alert("Please verify that you're a human.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Sorry, something went wrong on my end. Try reaching out on LinkedIn.")
        }
      );
  };

  return (
    <div className="as-contact">
      {isSubmitted ? (
        <p>Thank you for your message! I'll be in touch soon.</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            onChange={(value) => setCaptchaValue(value)}
          />
          <span className="btn-wrap"><input type="submit" id="asBtn" value="Send" ref={btnRef} /></span>
        </form>
      )}
    </div>
  );
}
