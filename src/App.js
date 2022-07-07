import React, { useState } from "react";
import { Typography } from "@mui/material";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CertTable from "./components/certTable.js";
import CertForm from "./components/certForm.js";
import EmployeeForm from "./components/employeeForm.js";
import SendButton from "./components/sendButton.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
export default function App() {
  const classes = useStyles();

  const [inputFieldsCert, setInputFieldsCert] = useState([
    {
      certName: "",
      certProvider: "",
      certCost: "",
      certDate: "",
    },
  ]);
  const [inputFieldsEmployee, setInputFieldsEmployee] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields:", inputFieldsCert, inputFieldsEmployee);
    axios
      .post(
        "/backend/add-employee-certs",
        { inputFieldsEmployee, inputFieldsCert },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        return response;
      });
  };

  const handleChangeInputEmployee = (index, event) => {
    const values = [...inputFieldsEmployee];
    values[index][event.target.name] = event.target.value;
    setInputFieldsEmployee(values);
  };
  const handleChangeInputCert = (index, event) => {
    const values = [...inputFieldsCert];
    values[index][event.target.name] = event.target.value;
    setInputFieldsCert(values);
  };

  const handleAddFields = () => {
    setInputFieldsCert([
      ...inputFieldsCert,
      {
        certName: "",
        certProvider: "",
        certCost: "",
        certDate: "",
      },
    ]);
  };
  const handleRemoveFields = () => {
    if (inputFieldsCert.length > 1) {
      const values = [...inputFieldsCert];
      console.log(inputFieldsCert);
      values.splice(inputFieldsCert.length - 1, 1);
      setInputFieldsCert(values);
    }
    console.log(inputFieldsCert);
  };

  return (
    <Container>
      <Typography variant="h5">Please identify yourself</Typography>
      {EmployeeForm(classes, inputFieldsEmployee, handleChangeInputEmployee)}
      <Typography variant="h5">Add your certificates</Typography>
      {CertForm(
        classes,
        handleRemoveFields,
        handleAddFields,
        inputFieldsCert,
        handleChangeInputCert
      )}
      {SendButton(classes, handleSubmit)}
      <Typography variant="h5">
        Here is a list of certificates from coworkers
      </Typography>
      {CertTable()}
    </Container>
  );
}
