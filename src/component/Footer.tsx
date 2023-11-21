import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "antd";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <div style={{ marginTop: "32px" }}>
      <Row
        style={{
          height: "10vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#03051E",
          color: "white",
        }}
      >
        <Col xs={24} sm={12} xl={8} style={{ fontSize: "20px" }}>
          <a
            href="https://www.facebook.com/DCPCR/"
            style={{ color: "#34CCCC", fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
            &#160; &#160;Facebook
          </a>
        </Col>
        <Col xs={24} sm={12} xl={8} style={{ fontSize: "20px" }}>
          <a
            href="https://www.instagram.com/dcpcr_delhi/"
            style={{ color: "#34CCCC", fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            &#160; &#160;Instagram
          </a>
        </Col>
        <Col xs={24} sm={12} xl={8} style={{ fontSize: "20px" }}>
          <a
            href="https://twitter.com/DCPCR"
            style={{ color: "#34CCCC", fontSize: "24px" }}
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            &#160; &#160; Twitter
          </a>
        </Col>
      </Row>
      <p className="footer" style={{ color: "white", fontSize: "20px" }}>
        Delhi Commission for Protection of Child Rights
        <br />
        &copy; Produced by British Asian Trust
        <br />
      </p>
      <div style={{ height: "10vh" }}></div>
    </div>
  );
}
