import React from "react";
import { Card } from "antd";
import schemesData from "../data/data.json";
interface SchemeProps {
  id: string;
}

const schemes = schemesData["$scholarship"];

const Scheme: React.FC<SchemeProps> = (props): JSX.Element => (
  <Card title="Card title" bordered={false} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

export default Scheme;
