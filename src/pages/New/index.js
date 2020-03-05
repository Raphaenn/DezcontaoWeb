import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from 'yup';

import { Container } from './styles';

export default function New() {

  const schema = Yup.object().shape({
    name: Yup.string().required("Campo Obrigatório"),
    email: Yup.string("Email Inválido").required("Campo Obrigatório"),
    social: Yup.string("Instagram Inválido").required("Campo Obrigatório"),
    phone: Yup.string("Telefone Inválido").required("Campo Obrigatório"),
    cep: Yup.string("Cep Inválido").required("Campo Obrigatório"),
    address: Yup.string("Endereço Inválido").required("Campo Obrigatório"),
    open_to: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    latitude: Yup.string("Latitude Inválido").required("Campo Obrigatório"),
    longitude: Yup.string("Longitude Inválido").required("Campo Obrigatório"),
    paymentform: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    obs: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    ticket: Yup.string("Campo Inválido").required("Campo Obrigatório"),
    highlight: Yup.string("Campo Inválido").required("Campo Obrigatório"),
});

  return (
    <Container>
      
        <Form schema={schema}>
          <p>Nome da empresa</p>
          <Input name="name"placeholder=""/>

          <p>Email</p>
          <Input name="email" placeholder=""/>

          <p>Instagram</p>
          <Input name="social" placeholder=""/>

          <p>Telefone</p>
          <Input name="phone" placeholder=""/>
          <hr/>

          <p>Cep</p>
          <Input name="cep" placeholder=""/>

          <p>Endereço</p>
          <Input name="address" placeholder=""/>

          <p>Horário de funcionamento</p>
          <Input name="open_to" placeholder=""/>

          <p>Latitude</p>
          <Input name="latitude" placeholder=""/>
          
          <p>Longitude</p>
          <Input name="longitude" placeholder=""/>
          
          <p>Forma de pagamento</p>
          <Input name="paymentform" placeholder=""/>
          
          <p>Obs</p>
          <Input name="obs" placeholder=""/>
          
          <p>Ticket</p>
          <Input name="ticket" placeholder=""/>
          
          <p>Ticket 2</p>
          <Input name="ticket2" placeholder=""/>
          
          <p>Ticket 3</p>
          <Input name="ticket3" placeholder=""/>
          
          <p>Ticket 3</p>
          <Input name="ticket4" placeholder=""/>
          
          <p>Destaque</p>
          <Input name="highlight" placeholder=""/>

          <button type="submit">Cadastrar empresa</button>
        </Form>
      
    </Container>
  );
}
