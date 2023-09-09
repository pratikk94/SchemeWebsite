import React from "react";
import { Card } from "antd";
import scholarshipData from "../data/data.json";
import parse from "html-react-parser";
interface SchemeProps {
  id: string;
}

const scholarship = scholarshipData["$schemes"];
console.log(scholarship);

let fabricateData: (props: string) => string = function (
  props: string
): string {
  for (let i: number = 0; i < scholarship.length; i++) {
    if (scholarship[i]["id"] === props) {
      return JSON.stringify(scholarship[i]);
    }
  }
  return "";
};

const Scholarship: React.FC<SchemeProps> = (props): JSX.Element => {
  let interimdata = JSON.parse(fabricateData(props.id));
  return interimdata === "" ? (
    <h1>No scheme Found</h1>
  ) : (
    <Card
      title={<h2>{interimdata["name"]}</h2>}
      bordered={true}
      style={{
        width: "56vw",
        textAlign: "start",
        backgroundColor: "#fff0ff",
        margin: "2vh",
      }}
    >
      <h3>Award/Entitlement:</h3>
      <p>{interimdata["award_entitlement"]}</p>
      <h3>Gender:</h3>
      <p>{interimdata["gender"]}</p>
      <h3>Max family income:</h3>
      <p>{interimdata["max_income"]}</p>
      <h3>Residence:</h3>
      <p>{interimdata["residence"]}</p>
      <h3>Disability:</h3>
      <p>{interimdata["disability"]}</p>
      <h3>Disability:</h3>
      <p>{interimdata["reservation"]}</p>
      <h3>eligibility:</h3>
      <p>{parse(interimdata["eligibility"])}</p>
      <h3>Document required:</h3>
      <p>{parse(interimdata["document_required"])}</p>
      <h3>Application link:</h3>
      <p>{parse(interimdata["application_link"])}</p>
      <h3>Grievance redressal:</h3>
      <p>{parse(interimdata["grievance_redressal"])}</p>
    </Card>
  );
};
export default Scholarship;
