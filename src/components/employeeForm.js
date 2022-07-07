import { TextField } from "@mui/material";

export default function EmployeeForm(
  classes,
  inputFieldsEmployee,
  handleChangeInputEmployee
) {
  return (
    <form className={classes.root}>
      {inputFieldsEmployee.map((inputField, index) => (
        <div key={index}>
          <TextField
            name="firstName"
            label="First Name"
            defaultValue={inputField.firstName}
            onChange={(event) => handleChangeInputEmployee(index, event)}
          />
          <TextField
            name="lastName"
            label="Last Name"
            defaultValue={inputField.lastName}
            onChange={(event) => handleChangeInputEmployee(index, event)}
          />
          <TextField
            name="email"
            label="Email Address"
            defaultValue={inputField.email}
            onChange={(event) => handleChangeInputEmployee(index, event)}
          />
        </div>
      ))}
    </form>
  );
}
