// Step1.tsx
import { DatePicker, DatePickerProps, InputNumber, Row } from "antd";
import React, { useState } from "react";
import RadioButtonWithImages from "./RadioButtonWithImages";

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

  const handleOptionChangeDisability = (value: string) => {
    setSelectedOptionDisability(value);
    props.onChangeDisability(value);
  };

  const handleOptionChangeReservation = (value: string) => {
    setSelectedOptionReservation(value);
    props.onChangeReservation(value);
  };

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
        style={{ textAlign: "center", color: "#964B00", marginBottom: "8vh" }}
      >
        Enter basic information
      </h1>

      <div>
        <Row>
          <h2
            style={{ textAlign: "left", color: "#964B00", marginBottom: "2vh" }}
          >
            Are you specially abled?
          </h2>
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
          <h2
            style={{ textAlign: "left", color: "#964B00", marginBottom: "2vh" }}
          >
            Are you amongst the following?
          </h2>
        </Row>
        <Row justify="center" style={{ width: "32vw" }}>
          <RadioButtonWithImages
            size={6}
            options={optionsReservation}
            selectedOption={selectedOptionReservation}
            onChange={handleOptionChangeReservation}
          />
        </Row>
        <br />
        <p>
          *Above two fields are optional and can be skipped for next options.
          <br />
          Although we recommend to fill in all the fields for accurate results
        </p>
      </div>
    </div>
  );
};

export default FormPage3;
