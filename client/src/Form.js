import React from 'react';
import emailjs from 'emailjs-com';
import './form.css'



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('jensen', 'template_Yzm4Y8al_clone', e.target, 'user_awbCOK1q1pP2PHb4vILtT')
      .then((result) => {
          console.log(result.text);
            if(alert('You message was sent!')){}
            else    window.location.reload(); 
      }, (error) => {
          console.log(error.text);
      });
  }

  

  return (
    <form className="contact-form" onSubmit={sendEmail}>
    <h1>Send me a message! </h1>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label> Include in your message a description of any photos you may be interested in!</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
