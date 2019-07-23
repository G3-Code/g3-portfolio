import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <section className="contact-area">
      <form action="POST" data-netlify="true">
        <div className="contact-container">
          <div className="contact-label">Full Name: </div>
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="contact-input"
            />
          </div>
          <div className="contact-label">Email address: </div>
          <div>
            <input
              type="text"
              placeholder="Email address"
              className="contact-input"
            />
          </div>
          <div className="contact-label">Message: </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              className="contact-input-msg"
            />
          </div>
          <div data-netlify-recaptcha="true" />
          <div>
            <input
              type="submit"
              className="contact-button"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
