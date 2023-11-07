import React from "react";
import "../CSS/ContactUs.css";
import Footer from "../component/Footer";

const ContactUs: React.FC = () => (
  <div className="App">
    <header className="Contact-header"></header>
    <div className="home">
      <div className="container-type" style={{ height: "80vh" }}>
        <center>
          <h1>Contact us</h1>
        </center>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactUs;
