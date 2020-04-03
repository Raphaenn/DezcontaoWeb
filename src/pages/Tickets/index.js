import React, { useState, useEffect } from 'react';

import PetsIcon from '@material-ui/icons/Pets';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AssistantIcon from '@material-ui/icons/Assistant';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

import { Container, Body, Left, TitleLeft, ListLeft, ListItem, ListItemAvatar, Avatar, Plus, ListItemText, ListItemText2, Right, Top, TitleRight, Bar, Base} from './styles';
import DropSelect from "../../components/Select";

import api from "../../services/api";

export default function Tickets() {

  const [ cupons, setCupons ] = useState([]);
  const [ empresas, setEmpresas ] = useState([]);

  useEffect(() => {
    async function loadTickets() {
        const response = await api.get('cupom');
        
        const filtro = response.data.map(item => item);
        const companiesFilter = response.data.map( item => item.companies.name );
        const onlynames = companiesFilter.filter((el, i, arr) => companiesFilter.indexOf(el) == i)

        setCupons(filtro);
        setEmpresas(onlynames);
  
    }
    loadTickets();
    }, []);

  return (
    <Container>
      
      <Body>

        <Left>
          <TitleLeft>
            <h1>Últimos cupons adquiridos</h1>
          </TitleLeft>

          <ListLeft>
           {cupons.map(item => (
              <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  { item.category.name === "Comida" ? <RestaurantIcon style={{ color: '#E93148' }} /> : item.category.name === "Beleza" ? <AssistantIcon style={{ color: '#fff' }} /> : item.category.name === "Casa" ? 
                  <HomeIcon style={{ color: '#fff' }} /> : item.category.name === "Construção" ? <BuildIcon style={{ color: '#fff' }} /> : item.category.name === "Moda" ? <LocalOfferIcon style={{ color: '#FF9F1C' }} />
                  : item.category.name === "Serviços" ? <WorkIcon style={{ color: '#17248B' }} /> : item.category.name === "Automóvel" ? <DirectionsCarIcon style={{ color: '#010F19' }} /> : item.category.name === "Pet" ? <PetsIcon style={{ color: '#fff' }} /> : item.category.name === "Saúde" ? <DirectionsRunIcon style={{ color: '#8DB438' }} /> : <ShoppingCartIcon style={{ color: '#fff' }} />
                  }
                </Avatar>
              
              </ListItemAvatar>
              <div>
              <ListItemText> {item.companies.name} </ListItemText>
              <ListItemText2> 02/04/2020  - {item.category.city}</ListItemText2>
              </div>
              <Plus ><span> {item.name} </span></Plus>
            </ListItem>
           ))}
          </ListLeft>
          
        </Left>

        <Right>
            <TitleRight>
              <h1>Dados dos Cupons</h1>
              <DropSelect nomes={empresas}/>
            </TitleRight>

            <Top>
              <Bar>
                
              </Bar>
            </Top>

            <Base>
            
            </Base>

        </Right>

      </Body>

    </Container>
  );
}
