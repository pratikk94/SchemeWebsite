import React from "react";
import { Card, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
interface TypeCardProps {
  type: string;
  description: string;
  id: string;
}
const TypeCard: React.FC<TypeCardProps> = (props): JSX.Element => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/form/" + props.id);
  }
  return (
    <center>
      <Tooltip title={props.description}>
        <span>{props.description}</span>
        <Card
          hoverable
          onClick={handleClick}
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
};

export default TypeCard;
