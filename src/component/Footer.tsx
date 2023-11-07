import { Col, Row } from "antd";

export default function Footer() {
  return (
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
  );
}
