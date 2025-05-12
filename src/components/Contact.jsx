import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div class="as-contact">
        {isSubmitted ? (
            <p> Thank you for your message! I'll be in touch soon.</p>
        ) : (
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        )}
    </div>
  );
};