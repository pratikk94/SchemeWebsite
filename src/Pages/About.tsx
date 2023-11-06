import React from "react";
import "../CSS/Home.css";
import image from "../images/bg_blur.png";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Card } from "antd";

const AboutUs: React.FC = () => {
  const position: [number, number] = [51.505, -0.09];
  return (
    <div className="App" style={{ backgroundImage: image }}>
      <header className="App-header"></header>
      <div className="home">
        <div
          className="container-type"
          style={{ height: "100vh", width: "100vw" }}
        >
          <center>
            <p style={{ margin: "2vw", fontSize: "48px", fontWeight: 900 }}>
              About us
            </p>
          </center>
          <h1
            style={{
              textAlign: "left",
              marginLeft: "16vw",
              marginRight: "16vw",
              marginBottom: "10px",
            }}
          >
            Delhi commission for protection of child rights
          </h1>
          <p
            style={{
              textAlign: "left",
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "24px",
            }}
          >
            The Delhi Commission for Protection of Child Rights (DCPCR), Govt of
            NCT of Delhi, has been constituted under the Commission for
            Protection of Child Rights (CPCR) Act, 2005. The Commission is
            responsible for monitoring the implementation of the rights of the
            children, conducting research, inquiring into complaints and
            violations of child rights, and advising the Government on policy
            matters on the issue of early childhood care and development, school
            education, protection of children from physical, mental and sexual
            violence, child labour, early marriage, substance abuse, and
            trafficking.
          </p>
          <h1
            style={{
              textAlign: "left",
              marginLeft: "16vw",
              marginRight: "16vw",
              marginBottom: "10px",
              marginTop: "24px",
            }}
          >
            Contact
          </h1>
          <Card
            style={{ height: "500px", width: "100%" }}
            bodyStyle={{ padding: 0 }}
          >
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "500px", width: "100%" }}
            >
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Card>
          <p
            style={{
              textAlign: "left",
              marginLeft: "16vw",
              marginRight: "16vw",
              fontSize: "24px",
            }}
          >
            Address: 4th & 5th Floor, ISBT Building ,<br />
            Kashmere Gate, Delhi-110006 <br />
            Phone No.: 011-23862684/91 <br />
            Fax No. : 011-23864312 <br />
            Email: dcpcr@hotmail.com /delhichildrightscommission@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
