import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState,useEffect} from 'react';


export const ContactUs = () => {
  const form = useRef();
  const [otp, setOtps] = useState('');
  useEffect(() => {
  setOtps(Math.floor(100000 + Math.random() * 900000))
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q89thxa', 'template_o3f00dj', form.current, 'cWaxkqNJaXjKX-xmK')
      .then((result) => {
          console.log(result.text);
        alert(otp)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{marginTop:'70px'}}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input name="otps" value={otp}  hidden/> 
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactUs;
