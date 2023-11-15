import React from "react";
import "../CSS/Home.css";
import "../CSS/FormPage.css";
import FormPageCompensation from "../component/FormForCompenstaion";

import Resources from "./Resources";
import FormMultiPageComponent from "../component/FormMultiPageComponent";

function returnFromType(props: string): JSX.Element {
  if (props === "1") return <FormMultiPageComponent type={1} />;
  else if (props === "2") return <FormMultiPageComponent type={2} />;
  else if (props === "3") return <FormPageCompensation />;
  else return <Resources />;
}

const FormPage: React.FC<any> = (props): JSX.Element => {
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
