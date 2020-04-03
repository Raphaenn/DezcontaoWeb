import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function DropSelect({ nomes }) {

  const classes = useStyles();
  const [companieslist, setCompanieslist] = useState();
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    setCompanieslist(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return ( 
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Empresas</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={companieslist}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Todas</em>
          </MenuItem>
          { nomes.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          )) }
        </Select>
      </FormControl>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginRight: 20,
    },
  }));