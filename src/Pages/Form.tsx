import React from "react";
import "../CSS/Home.css";
import "../CSS/FormPage.css";
import FormPageScheme from "../component/FormForScheme";
import FormPageScholarship from "../component/FormForScholarship";
import FormPageCompensation from "../component/FormForCompenstaion";

import Resources from "./Resources";
interface FormPageProps {
  type: string;
}

function returnFromType(props: string): JSX.Element {
  if (props === "1") return <FormPageScheme />;
  else if (props === "2") return <FormPageScholarship />;
  else if (props === "3") return <FormPageCompensation />;
  else return <Resources />;
}

const FormPage: React.FC<FormPageProps> = (props): JSX.Element => {
  let formType = returnFromType(props.type);

  return (
    <div className="FormPage">
      <div className="container-type" style={{ height: "80vh" }}>
        <div className="Spacer" style={{ height: "16vh" }} />
        <center>{formType}</center>
      </div>
    </div>
  );
};

export default FormPage;
