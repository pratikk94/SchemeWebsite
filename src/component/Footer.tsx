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
            Facebook
          </a>
        </Col>
        <Col span={4} style={{ fontSize: "24px" }}>
          <a href="https://www.instagram.com/dcpcr_delhi/">Instagram</a>
        </Col>
        <Col span={4} style={{ fontSize: "24px" }}>
          <a href="https://twitter.com/DCPCR">Twitter</a>
        </Col>
      </Row>
      <p style={{ color: "white" }}>
        Delhi commision for protection of child rights
        <br />
        &copy; Produced by Britis Asian Trust;
      </p>
    </div>
  );
}
