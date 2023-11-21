import React from "react";
import "../CSS/ContactUs.css";
import Footer from "../component/Footer";
import { Card } from "antd";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = () => (
  <div>
    <p>DCPCR</p>
  </div>
);
const defaultProps = {
  center: {
    lat: 28.6682,
    lng: 77.2301,
  },
  zoom: 20,
};
const ContactUs: React.FC = () => (
  <div className="App">
    <header className="Contact-header"></header>
    <div className="home">
      <div className="container-type" style={{ height: "100vh" }}>
        <center>
          <center>
            <p
              style={{
                margin: "2vw",
                fontSize: "48px",
                fontWeight: 900,
                marginTop: "60vh",
                color: "#1A196F",
              }}
            >
              Contact us
            </p>
          </center>
          <Card
            style={{ height: "500px", width: "100%" }}
            bodyStyle={{ padding: 0 }}
          >
            <div style={{ height: "88vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                style={{ height: "40vh" }}
              >
                <AnyReactComponent />
              </GoogleMapReact>
            </div>
          </Card>

          <p
            style={{
              textAlign: "left",
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "24px",
              marginBottom: "20px",
            }}
          >
            Address: 4th & 5th Floor, ISBT Building ,<br />
            Kashmere Gate, Delhi-110006 <br />
            Phone No.: 011-23862684/91 <br />
            Fax No. : 011-23864312 <br />
            Email: dcpcr@hotmail.com /delhichildrightscommission@gmail.com
          </p>
        </center>
      </div>
    </div>
    <div
      style={{ height: "20vh", backgroundColor: "#03051E", marginTop: "5vh" }}
    >
      <Footer />
    </div>
  </div>
);

export default ContactUs;
