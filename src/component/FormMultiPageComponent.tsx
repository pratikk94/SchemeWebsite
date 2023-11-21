// MultiPageForm.tsx
import React, { useState } from "react";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import { Card } from "antd";
import "../CSS/FormMultiPage.css";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import SchemeCard from "../Pages/AllResources/SchemeCard";
import Footer from "./Footer";

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
  const [schemes, setSchemes] = useState([]);
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

    console.log("data here: ", residence);

    axios
      .post("https://schemes-api.grevity.in/get_schemes_by_selected_options", {
        reservation,
        gender,
        maxIncome,
        residence: residence === "Delhi" ? "NCT of Delhi" : "NA",
        disability,
        age,
      })
      .then((u: any) => {
        setCurrentPage(4);
        setSchemes(u.data);
      });

    // setIds((prevIds) => []);
    // let returnIds = getResources(
    //   props.type,
    //   reservation,
    //   gender,
    //   maxIncome,
    //   residence,
    //   disability,
    //   age
    // );
    // console.log(returnIds);
    // if (returnIds.length !== 0) setIds(returnIds);
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
  if (isDesktopOrLaptop) margin = currentPage === 4 ? "0vw" : "16vw";
  return (
    <div>
      <div
        className="container"
        style={{ background: "../public/BG.png", height: "100vh" }}
      >
        <Card
          style={{
            marginLeft: margin,
            marginRight: margin,
          }}
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
        {/* {currentPage === 4 && <Scheme type={props.type} id={ids} />} */}
        {currentPage === 4 && schemes.length > 0 ? (
          schemes.map((scheme: any) => (
            <div className="schemes" style={{ textAlign: "left" }}>
              <SchemeCard scheme={scheme} />
            </div>
          ))
        ) : (
          <p>No Schemes found in our database</p>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#03051E",
        }}
      >
        <center>
          <Footer />
        </center>
      </div>
    </div>
  );
};

export default FormMultiPageComponent;
