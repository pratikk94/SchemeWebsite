// MultiPageForm.tsx
import React, { useState } from "react";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import { getResources } from "../utils/util";
import { Card } from "antd";
import Scheme from "./Scheme";
import { useMediaQuery } from "react-responsive";

interface FormMultiPageComponentProps {
  type: number;
}

const FormMultiPageComponent: React.FC<FormMultiPageComponentProps> = (
  props
): JSX.Element => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  //const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [currentPage, setCurrentPage] = useState(1);
  const [gender, setGender] = useState("Female");
  const [maxIncome, setMaxIncome] = useState(0);
  const [residence, setResidence] = useState("Delhi");
  const [disability, setDisability] = useState("N/A");
  const [reservation, setReservation] = useState("SC");
  const [age, setAge] = useState(0);
  const [ids, setIds] = useState([""]);
  const [date, setDate] = useState("");

  const onChangeGender = (e: string) => {
    console.log("radio checked", e);
    setGender(e);
  };

  const onChangeMaxIncome = (e: number) => {
    console.log("Max income :", e);
    setMaxIncome(e);
  };

  const onChangeResidence = (e: string) => {
    console.log("radio checked", e);
    setResidence(e);
  };

  const onChangeDisability = (e: string) => {
    console.log("radio checked", e);
    setDisability(e);
  };

  const onChangeReservation = (e: string) => {
    console.log("radio checked", e);
    setReservation(e);
  };

  const onChangeDate = (date: number) => {
    setAge(date);
  };

  const onChangeDateValue = (dateString: string) => {
    setDate(dateString);
  };

  //const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setIds([""]);
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = () => {
    // Handle form submission with formData
    setCurrentPage((prevPage) => prevPage + 1);

    console.log("submit pressed");
    console.log(props.type);
    console.log(gender);
    setIds((prevIds) => []);
    let returnIds = getResources(
      props.type,
      reservation,
      gender,
      maxIncome,
      residence,
      disability,
      age
    );
    console.log(returnIds);
    if (returnIds.length !== 0) setIds(returnIds);
  };

  const renderStep = () => {
    switch (currentPage) {
      case 1:
        return (
          <FormPage1
            onChangeAge={onChangeDate}
            age={date}
            onChangeGender={onChangeGender}
            gender={gender}
            onChangeDate={onChangeDateValue}
            date={date}
          />
        );
      case 2:
        return (
          <FormPage2
            onChangeMaxFamilyIncome={onChangeMaxIncome}
            onChangeResidenace={onChangeResidence}
          />
        );
      case 3:
        return (
          <FormPage3
            onChangeDisability={onChangeDisability}
            onChangeReservation={onChangeReservation}
            reservation={reservation}
          />
        );
      default:
        return null;
    }
  };
  let margin = "8vw";
  if (isDesktopOrLaptop) margin = currentPage === 4 ? "24vw" : "32vw";

  return (
    <div style={{ background: "../public/BG.png" }}>
      <Card
        style={{ marginLeft: margin, marginRight: margin, marginTop: "120px" }}
      >
        {renderStep()}

        <div>
          {currentPage > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              style={{
                backgroundColor: "#1A1970",
                fontSize: "3vh",
                color: "#fff",
                padding: "0.5vh",
                margin: "0.5vw",
              }}
            >
              {currentPage === 4 ? "Make changes press back" : "Previous"}
            </button>
          )}
          {currentPage < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              style={{
                backgroundColor: "#1A1970",
                fontSize: "3vh",
                color: "#fff",
                padding: "0.5vh",
                margin: "0.5vw",
              }}
            >
              Next
            </button>
          ) : currentPage !== 4 ? (
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#1A1970",
                fontSize: "3vh",
                color: "#fff",
                padding: "0.5vh",
                margin: "0.5vw",
              }}
            >
              Submit
            </button>
          ) : (
            <p></p>
          )}
        </div>
      </Card>
      {currentPage === 4 && <Scheme type={props.type} id={ids} />}
    </div>
  );
};

export default FormMultiPageComponent;
