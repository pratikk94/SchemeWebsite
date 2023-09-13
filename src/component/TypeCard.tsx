import React from "react";
import { Card, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
interface TypeCardProps {
  type: string;
  description: string;
  url: string;
  id: string;
  dimWidth: string;
  dimHeight: string;
}
const TypeCard: React.FC<TypeCardProps> = (props): JSX.Element => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/form/" + props.id);
  }

  return (
    <center>
      <Tooltip title={props.description}>
        <Card
          hoverable
          onClick={handleClick}
          style={{ width: props.dimWidth, height: props.dimHeight }}
          cover={<img alt="example" src={window.location.origin + props.url} />}
        >
          <Meta title={props.type} />
        </Card>
      </Tooltip>
    </center>
  );
};

export default TypeCard;
