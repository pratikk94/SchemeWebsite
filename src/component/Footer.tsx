import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "antd";

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
        <Col span={4} style={{ fontSize: "24px" }}>
          <a
            href="https://www.facebook.com/DCPCR/"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ffffff" }} />
            Facebook
          </a>
        </Col>
        <Col span={4} style={{ fontSize: "24px" }}>
          <a href="https://www.instagram.com/dcpcr_delhi/">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            Instagram
          </a>
        </Col>
        <Col span={4} style={{ fontSize: "24px" }}>
          <a href="https://twitter.com/DCPCR">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
            Twitter
          </a>
        </Col>
      </Row>
      <p style={{ color: "white" }}>
        Delhi Commission for Protection of Child Rights
        <br />
        &copy; Produced by British Asian Trust
      </p>
    </div>
  );
}
