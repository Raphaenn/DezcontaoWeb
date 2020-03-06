import React, { useState, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Negform() {

  const [ formularioTwo, setFormularioTwo ] = useState({ 
    descricao: '', 
    desc: '',
    desc1: '',
    desc2: '',
    desc3: '',
    highlight: false,
  });

const updateField = e => {
  setFormularioTwo({
    ...formularioTwo,
    [e.target.name]: e.target.value
  });
};


  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Dados Promocionais
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField required
          name="descricao"
          value={formularioTwo.descricao}
          label="Descrição da atividade" 
          fullWidth
          onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required 
          name="desc" 
          value={formularioTwo.desc}
          label="Desconto obrigatório" 
          fullWidth 
          onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          name="desc1" 
          value={formularioTwo.desc1}
          label="Desconto Optativo 1" 
          fullWidth 
          onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="desc2"
            value={formularioTwo.desc2}
            label="Desconto Optativo 2"
            helperText="Last three digits on signature strip"
            fullWidth
            onChange={updateField}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          name="desc3" 
          value={formularioTwo.desc3}
          label="Desconto Optativo 3" 
          fullWidth 
          onChange={updateField}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
            <Checkbox 
            color="primary" 
            name="highlight" 
            value={true} 
            onChange={updateField}
            />
          }
            label="Plano destaque"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}