import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "@emailjs/browser";
import { Typography } from "@material-ui/core";
import bgImage from "../../../images/backgroun.png";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:"url{bgImage}",
    width: "30%",
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
    },
    "& label": {
      fontWeight: "bold",
    },
    "& input[type='text']": {
      padding: "12px 20px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
    },
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#3e8e41",
    },
  }
}));

export default function Form() {
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yc0bxkb",
        "template_irg7g3h",
        formRef.current,
        "liF5YCgOMzpawkNlE"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          // show the user an error
        }
      );
    formRef.current.reset();
  };

  const classes = useStyles();

  return (
    <>
      <form id="contacto"
        ref={formRef}
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Typography  variant="h2" style={{fontWeight: "bold",
    textAlign: "center", fontSize:"180%" }} >
          Contácto
        </Typography>
        <label htmlFor="from_name" >Nombre</label>
        <input type="text" name="from_name" id="from_name" />
        <label htmlFor="from_email">Correo electrónico</label>
        <input type="text" name="from_email" id="from_email" />
        <label htmlFor="message">Mensaje</label>
        <input type="text" name="message" id="message" />
        <button type="submit" className={classes.button}>
          Enviar
        </button>
      </form>
    </>
  );
}
