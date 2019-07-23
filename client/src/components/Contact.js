import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <section className="contact-area">
      <form>
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
          <div>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
