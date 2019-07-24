import React from "react";
import "../style/contact.css";

class Contact extends React.Component {
  state = {
    isNameError: false,
    isEmailError: false,
    isMsgError: false,
    nameError: "",
    emailError: "",
    messageError: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Handle submit clicked");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let isNameError,
      isEmailError,
      isMsgError = false;
    let emailError,
      nameError,
      messageError = "";
    console.log(`${name.value}`);
    if (!name.value.length) {
      nameError = "(Please enter the full name)";
      isNameError = true;
    } else {
      nameError = "";
      isNameError = false;
    }
    if (!email.value.length) {
      emailError = "(Please enter a valid email)";
      isEmailError = true;
    } else if (!this.validateEmail(email.value)) {
      emailError = "(Please enter a valid email)";
      isEmailError = true;
    } else {
      emailError = "";
      isEmailError = false;
    }
    if (!message.value.length) {
      messageError = "(Please enter a message)";
      isMsgError = true;
    } else {
      message = "";
      isMsgError = false;
    }
    console.log("------------------");
    console.log(nameError);
    console.log(emailError);
    console.log(messageError);
    this.setState({
      isNameError: isNameError,
      isEmailError: isEmailError,
      isMsgError: isMsgError,
      nameError: nameError,
      emailError: emailError,
      msgError: messageError
    });
    // let form = document.getElementById("form-contact");
    // form.submit();
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  render() {
    return (
      <section className="contact-area">
        <form
          name="contact"
          method="POST"
          onSubmit={this.handleSubmit}
          id="form-contact"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="contact-container">
            <div className="contact-content-container">
              <div className="contact-row">
                <div className="contact-label">
                  Full Name<sup>*</sup>
                  <span className="error">{this.state.nameError}</span>
                </div>

                <input
                  type="text"
                  placeholder="Full name"
                  className="contact-input"
                  name="name"
                  id="name"
                />
              </div>

              <div className="contact-row">
                <div className="contact-label">
                  Email address<sup>*</sup>{" "}
                  <span className="error">{this.state.emailError}</span>
                </div>

                <input
                  type="text"
                  placeholder="Email address"
                  className="contact-input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="contact-row">
                <div className="contact-label">
                  Message<sup>*</sup>{" "}
                  <span className="error">{this.state.msgError}</span>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  className="contact-input-msg"
                  id="message"
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
          </div>
        </form>
      </section>
    );
  }
}

export default Contact;
