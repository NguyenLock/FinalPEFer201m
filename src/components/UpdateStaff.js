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
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateStaff() {
    const staff = useParams();

    const [Open, setOpen] = useState(false)

    const [APIData, setAPIData] = useState([]);
    const getStaffsUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/declareASchema/${staff.id}`
    useEffect(() => {
        axios.get(getStaffsUrl).then(
            response => {
                return response.data;
            }
        )
            .then(data => { setAPIData(data) })
            .catch(error => console.log(error.message))
    }, [getStaffsUrl])

    const handleClose = () => {
        setOpen(false);
    };
    const putStaffUrl = `https://65375e4bbb226bb85dd320ac.mockapi.io/declareASchema`
    const currDate = new Date();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: APIData,

        onSubmit: (values) => {
            values.createdAt = new Date(values.createdAt);
            axios.post(putStaffUrl, values)
                .then(
                    response => {
                        return response.data;
                    }
                )
                .then(data => setOpen(true))
                .catch(error => console.log(error.message))
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Require').min(3, 'Must be More than 2 Character'),
            address: Yup.string().required('Require').typeError('Please Enter Address'),
            age: Yup.number().integer().required('Require').typeError('Please Enter A valid Number'),
            avatar: Yup.string().url().required('Require').typeError('Avatar must be A url'),
            createdAt: Yup.string().required('Require').typeError('please Enter Date Create')
        })
    })
    return (
        <div>
            <h1 className="font-pages">Update Staff</h1>
            

        </div>

    )

}
