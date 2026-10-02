import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Please enter your name");
      isValid = false;
    } else if (name.trim().length < 4) {
      setNameError("Name must be at least 4 characters");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Please enter your message");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      setName("");
      setEmail("");
      setMessage("");
      alert("Thank you! Your message has been received.");
    }
  }

  return (
    <section className="page content-page contact">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1 className="page-title">
        Let's work <span>together</span>
      </h1>

      <div className="contact-grid">
        <div className="glass-card">
          <h2>Contact Me</h2>
          <p>
            I would love to hear from you. Feel free to contact me for any
            project, internship or collaboration opportunity.
          </p>

          <p>
            <small>Name</small>
            <br />
            Rajesh Prajapat
          </p>

          <p>
            <small>Email</small>
            <br />
            rajeshprajapat6162@gmail.com
          </p>

          <p>
            <small>Phone</small>
            <br />
            8290500160
          </p>

          <p>
            <small>Location</small>
            <br />
            Banoda, Salumber, Rajasthan, India
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Me a Message</h2>

          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span id="nameError">{nameError}</span>

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span id="emailError">{emailError}</span>

          <label>Message:</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span id="messageError">{messageError}</span>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
