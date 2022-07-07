import { TextField } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export default function CertForm(
  classes,
  handleRemoveFields,
  handleAddFields,
  inputFieldsCert,
  handleChangeInputCert
) {
  return (
    <form className={classes.root}>
      <IconButton onClick={() => handleRemoveFields()} size="small">
        <RemoveIcon />
      </IconButton>
      <IconButton onClick={() => handleAddFields()}>
        <AddIcon />
      </IconButton>
      {inputFieldsCert.map((inputField, index) => (
        <div key={index}>
          <TextField
            name="certName"
            label="Name of Certification"
            defaultValue={inputField.certName}
            onChange={(event) => handleChangeInputCert(index, event)}
          />
          <TextField
            name="certProvider"
            label="Provider of Certification"
            defaultValue={inputField.certProvider}
            onChange={(event) => handleChangeInputCert(index, event)}
          />
          <TextField
            name="certCost"
            type="number"
            label="Cost in €"
            defaultValue={inputField.certCost}
            onChange={(event) => handleChangeInputCert(index, event)}
          />
          <TextField
            name="certDate"
            type="date"
            //label="Date of Certification"
            defaultValue={inputField.certDate}
            onChange={(event) => handleChangeInputCert(index, event)}
          />
        </div>
      ))}
    </form>
  );
}
