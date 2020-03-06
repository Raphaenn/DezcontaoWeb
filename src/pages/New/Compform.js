import React, { useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function Compform() {

  const [ formulario, setFormulario ] = useState({ 
      name: '', 
      email: '',
      address: '',
      phone: '',
      cep: '',
      social: '',
      open: '',
      latitude: '',
      longitude: '',
    });

  const updateField = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };


  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="name"
            value={formulario.name}
            label="Nome"
            fullWidth
            autoComplete="fname"
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="email"
            label="Email"
            fullWidth
            value={formulario.email}
            autoComplete="lname"
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address"
            value={formulario.address}
            label="Endereço"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="phone"
            value={formulario.phone}
            label="Telefone"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          required 
          name="cep" 
          value={formulario.cep}
          label="Cep" 
          fullWidth 
          onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="open"
            value={formulario.open}
            label="Horário de atendimento"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="social"
            value={formulario.social}
            label="Instagram"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="latitude"
            value={formulario.latitude}
            label="Latitude"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="longitude"
            value={formulario.longitude}
            label="Longitude"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Fragment>
  );
}