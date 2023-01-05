import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export interface Props {
  open: boolean;
  setOpen: Function;
  dialogTitle: string;
  dialogContent: string;
  dialogButton: string;
  triggerParentFunction: Function;
}

export default function AlertDialog({
  open,
  setOpen,
  dialogTitle,
  dialogContent,
  dialogButton,
  triggerParentFunction,
}: Props) {
  function handleCancel() {
    setOpen(false);
  }

  function handleClose() {
    setOpen(false);
    triggerParentFunction();
  }

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* Dialog Title */}
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      {/* Dialog Content */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      {/* Dialog Actions */}
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          {dialogButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
