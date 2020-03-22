import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ClassIcon from '@material-ui/icons/Class';
import { makeStyles } from '@material-ui/core/styles';


import api from "../../services/api";
import { Container, Body, Left, Right, Scroll, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemText2, FormField, ButtonField } from './styles';

export default function Categorias() {

  const classes = useStyles();
  const [ categorias, setCategorias ] = useState([]);

  useEffect(() => {
    async function loadCat() {
        const response = await api.get('categories');
        
        const filtro = response.data.map(item => item);
        setCategorias(filtro);
    }
    loadCat();
    }, []);

  return (
    <Container>

      <Body>

        <Left>
          <div>
            <h1>Categorias</h1>

            <List className={classes.root}>

              { categorias.map( item => (
                <Scroll>
                 <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <ClassIcon style={{ color: '#fff' }} />
                   </Avatar>
                  
                 </ListItemAvatar>
                 <div>
                  <ListItemText> {item.name} </ListItemText>
                  <ListItemText2>Id: {item.id} </ListItemText2>
                 </div>
               </ListItem>
               </Scroll>
              )) }

            </List>
            
          </div>

        </Left>

        <Right>
          {/* <h1>Categorias</h1> */}
          
          <FormField>
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            <TextField id="outlined-basic" label="Cidade" variant="outlined" style={{ marginTop: 20 }} />
            <TextField id="outlined-basic" label="Estado" variant="outlined" style={{ marginTop: 20 }} />
            <ButtonField>Enviar</ButtonField>
          </FormField>
        </Right>

      </Body>
      
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid rgba(235, 235, 235)',
    borderRadius: 15,
    width: '100%',
    maxWidth: 360,
    maxHeight: 360,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper,
  },
  field: {
    marginTop: 20,
  },
}));
