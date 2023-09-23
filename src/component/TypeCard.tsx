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
          style={{
            width: props.dimWidth,
            height: props.dimHeight,
            // margin: props.dimWidth == "28vw" ? "0vh" : "10vh",
          }}
          cover={
            <img
              alt="example"
              src={window.location.origin + props.url}
              // style={
              //   props.dimWidth == "72vw"
              //     ? { width: "28vw", height: "28vh " }
              //     : {}
              // }
            />
          }
        >
          <Meta title={props.type} style={{}} />
        </Card>
      </Tooltip>
    </center>
  );
};

export default TypeCard;
