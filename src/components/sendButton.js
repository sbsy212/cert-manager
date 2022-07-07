import { Button, Icon } from "@mui/material";

export default function SendButton(classes, handleSubmit, sentCert) {
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      type="submit"
      endIcon={<Icon>send</Icon>}
      onClick={handleSubmit}
    >
      Send
    </Button>
  );
}
