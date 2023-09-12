import React from "react";
import { Card } from "antd";
import scholarshipData from "../data/data.json";
import parse from "html-react-parser";
interface SchemeProps {
  id: string[];
}

const scholarship = scholarshipData["$scholarship"];

let fabricateData: (props: string[]) => string[] = function (
  props: string[]
): string[] {
  let data: string[] = [];
  for (let j: number = 0; j < props.length; j++) {
    for (let i: number = 0; i < scholarship.length; i++) {
      if (scholarship[i]["id"] === props[j]) {
        data.push(JSON.stringify(scholarship[i]));
      }
    }
  }
  console.log(data);
  return data;
};

const Scholarship: React.FC<SchemeProps> = (props): JSX.Element => {
  let interimDataArray = fabricateData(props.id);
  return interimDataArray.length === 0 ? (
    <h1>No scheme Found</h1>
  ) : (
    <div>
      {interimDataArray.map((interimdata) => (
        <Card
          key={JSON.parse(interimdata)["id"]}
          title={<h2>{JSON.parse(interimdata)["name"]}</h2>}
          bordered={true}
          style={{
            width: "50vw",
            textAlign: "start",
            backgroundColor: "#fff0ff",
            margin: "2vh",
          }}
        >
          <h3>Award/Entitlement:</h3>
          <p>{JSON.parse(interimdata)["award_entitlement"]}</p>
          <h3>Gender:</h3>
          <p>{JSON.parse(interimdata)["gender"]}</p>
          <h3>Max family income:</h3>
          <p>{JSON.parse(interimdata)["max_income"]}</p>
          <h3>Residence:</h3>
          <p>{JSON.parse(interimdata)["residence"]}</p>
          <h3>Disability:</h3>
          <p>{JSON.parse(interimdata)["disability"]}</p>
          <h3>Disability:</h3>
          <p>{JSON.parse(interimdata)["reservation"]}</p>
          <h3>eligibility:</h3>
          <p>{parse(JSON.parse(interimdata)["eligibility"])}</p>
          <h3>Document required:</h3>
          <p>{parse(JSON.parse(interimdata)["document_required"])}</p>
          <h3>Application link:</h3>
          <p>{parse(JSON.parse(interimdata)["application_link"])}</p>
          <h3>Grievance redressal:</h3>
          <p>{parse(JSON.parse(interimdata)["grievance_redressal"])}</p>
        </Card>
      ))}
    </div>
  );
};
export default Scholarship;
