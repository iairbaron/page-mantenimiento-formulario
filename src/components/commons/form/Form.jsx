import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        id="message"
        label="Mensaje"
        variant="outlined"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}
