import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextField, Button } from "@mui/material";
import * as React from 'react';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddStaff() {
  const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const postStaffUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/declareASchema`;
  const currDate = new Date();

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      age: "",
      avatar: "",
      createAt: currDate,
    },
    onSubmit: (values) => {
      values.createAt = new Date(values.createAt);
      axios.post(postStaffUrl, values)
        .then(
          response => { return response.data }
        )
        .then(data => setOpen(true))
        .catch(error => console.log(error.message))
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Require").min(3, "Must be more Than 2 Character"),
      address: Yup.string().required("Require").typeError("Please Enter Address"),
      age: Yup.number().integer().required("Require").typeError("Please Enter A Valid Number"),
      avatar: Yup.string().url().required("Require").typeError("Avatar must be a valid Url"),
      createAt: Yup.string().required("Require").typeError("Please Enter Date")
    }),
  });



  return (
    <div>
      <h1 className="font-pages">Add new staff</h1>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
          <TextField
            label="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
          {formik.errors.address && (<Typography variant="caption" color="red">{formik.errors.address}</Typography>)}
          <TextField
            label="age"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.errors.age && (<Typography variant="caption" color="red">{formik.errors.age}</Typography>)}

          <TextField
            label="avatar"
            name="avatar"
            value={formik.values.avatar}
            onChange={formik.handleChange}
          />
          {formik.errors.avatar && (<Typography variant="caption" color="red">{formik.errors.avatar}</Typography>)}

          <TextField
            label="createdAt"
            name="createdAt"
            disabled
            value={formik.values.createAt}
            onChange={formik.handleChange}
          />




        </Stack>

        <Button variant="contained" size="small"
          type='submit'>
          Save
        </Button>

      </form>

      <Dialog
        open={Open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Congraturation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )

}


