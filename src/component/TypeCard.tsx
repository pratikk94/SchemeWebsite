import React from "react";
import { Card, Tooltip } from "antd";

const { Meta } = Card;
interface TypeCardProps {
  type: string;
  description: string;
}
const TypeCard: React.FC<TypeCardProps> = (props): JSX.Element => (
  <center>
    <Tooltip title={props.description}>
      <span>{props.description}</span>
      <Card
        hoverable
        style={{ width: "14vw", height: "14vh" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={props.type} />
      </Card>
    </Tooltip>
  </center>
);

export default TypeCard;
