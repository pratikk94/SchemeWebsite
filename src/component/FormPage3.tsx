// Step1.tsx
import { Row } from "antd";
import React, { useState } from "react";
import RadioButtonWithImages from "./RadioButtonWithImages";
import { useMediaQuery } from "react-responsive";

interface FormPage3Props {
  onChangeReservation: (data: string) => void;
  onChangeDisability: (data: string) => void;
  reservation: string;
}

const FormPage3: React.FC<FormPage3Props> = (props): JSX.Element => {
  // Form fields for Step 1
  const [selectedOptionDisability, setSelectedOptionDisability] =
    useState<string>("No");
  const [selectedOptionReservation, setSelectedOptionReservation] =
    useState<string>(props.reservation);

  //const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const handleOptionChangeDisability = (value: string) => {
    setSelectedOptionDisability(value);
    props.onChangeDisability(value);
  };

  const handleOptionChangeReservation = (value: string) => {
    setSelectedOptionReservation(value);
    props.onChangeReservation(value);
  };

  let radioButtonSize = isDesktopOrLaptop ? 6 : 12;

  const optionsDisability = [
    {
      value: "Yes",
      label: "Yes",
      imageUrl: "/male.png",
    },
    {
      value: "No",
      label: "No",
      imageUrl: "/female.png",
    },
  ];

  const optionsReservation = [
    {
      value: "SC",
      label: "SC",
      imageUrl: "/male.png",
    },
    {
      value: "ST",
      label: "ST",
      imageUrl: "/female.png",
    },

    {
      value: "OBC",
      label: "OBC",
      imageUrl: "/female.png",
    },
    {
      value: "Minority",
      label: "Minority",
      imageUrl: "/male.png",
    },
  ];

  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#1A1970", marginBottom: "4vh" }}
      >
        Enter Your Information
      </h1>

      <div>
        <Row>
          <h1
            style={{ textAlign: "left", color: "#1A1970", marginBottom: "2vh" }}
          >
            Are you specially abled?
          </h1>
        </Row>
        <Row justify="center">
          <RadioButtonWithImages
            size={12}
            options={optionsDisability}
            selectedOption={selectedOptionDisability}
            onChange={handleOptionChangeDisability}
          />
        </Row>

        <Row>
          <h1
            style={{ textAlign: "left", color: "#1A1970", marginBottom: "2vh" }}
          >
            Are you amongst the following?
          </h1>
        </Row>
        <Row justify="center" style={{ width: "32vw" }}>
          <RadioButtonWithImages
            size={radioButtonSize}
            options={optionsReservation}
            selectedOption={selectedOptionReservation}
            onChange={handleOptionChangeReservation}
          />
        </Row>
        <br />
      </div>
    </div>
  );
};

export default FormPage3;
