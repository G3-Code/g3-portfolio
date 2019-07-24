import React from "react";
import "../style/contact.css";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact-area">
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-container">
            <div className="contact-label">Full Name: </div>
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="contact-input"
                name="name"
              />
            </div>
            <div className="contact-label">Email address: </div>
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="contact-input"
                name="email"
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
}

export default Contact;
