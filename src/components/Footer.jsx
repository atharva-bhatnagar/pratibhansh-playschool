import React from "react";

var date = new Date();
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h1>Contact Us</h1>
      <div className="contact">
        Email - pratibhansh@gmail.com
        <form
          action="https://formsubmit.co/atharvakvrdso@gmail.com"
          method="POST"
        >
          <input placeholder="Name" name="Name" type="text" required />
          <input placeholder="Email" name="Email" type="email" required />
          <textarea
            placeholder="Message"
            name="Message"
            rows="4"
            cols="40"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
export default Footer;
