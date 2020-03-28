import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import ClassIcon from '@material-ui/icons/Class';


import api from "../../services/api";
import { addCatRequest } from "../../store/modules/categories/actions";
import CatGrafic from "../../components/CatgGrafic";

import { Container, Body, Left, Right, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemText2, FormField, ButtonField, Divisor, Footer } from './styles';

export default function Categorias() {

  const dispatch = useDispatch();
  const [ categorias, setCategorias ] = useState([]);
  const [ catform, setCatform ] = useState({
    name: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    async function loadCat() {
        const response = await api.get('categories');
        
        const filtro = response.data.map(item => item);
        setCategorias(filtro);
    }
    loadCat();
    }, []);

    const handleChange = input => event => {
      setCatform({ ...catform, [input]: event.target.value})
    }

    const handleSave = async () => {
      dispatch(addCatRequest(catform));
      
    }
    

  return (
    <Container>

      <Body>

        <Left>
          <div>
            <h1>Categorias</h1>

            <List >

              { categorias.map( item => (
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
              )) }

            </List>
            
          </div>

        </Left>

        <Right>
          <h1>Categorias x Empresas</h1>

          <Divisor />
          <Footer>
            <FormField>
              <h2>Nova Categoria</h2>
              <TextField name="name" label="Nome" variant="outlined" onChange={handleChange('name')}
            /* defaultValue={values.name} */ />
              <TextField name="city" label="Cidade" variant="outlined" style={{ marginLeft: 20 }} onChange={handleChange('city')} />
              <TextField name="state" label="Estado" variant="outlined" style={{ marginLeft: 20, marginRight: 20 }} onChange={handleChange('state')} />
              <ButtonField onClick={handleSave} >Enviar</ButtonField>
            </FormField>
          </Footer>

        </Right>

      </Body>
      
    </Container>
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     border: '1px solid rgba(235, 235, 235)',
//     borderRadius: 15,
//     width: '100%',
//     maxWidth: 360,
//     maxHeight: '100%',
//     marginTop: 10,
//     backgroundColor: theme.palette.background.paper,
//   },
//   field: {
//     marginTop: 20,
//   },
// }));
