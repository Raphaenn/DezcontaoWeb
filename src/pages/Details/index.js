import React, { useState, useEffect } from 'react';
import { Form, Input } from "@rocketseat/unform";

import api from "../../services/api";
import { Container } from './styles';

export default function Details({match}) {

  const [ info, setInfo ] = useState([]);

  useEffect(() => {
    async function handleDados() {
      const response = await api.get('companies');

      const parametro = match.params.id;
      const dados = response.data.filter(item => item.id == parametro)
      
      setInfo(dados)
    }
    handleDados();
  }, [])


  return (
    <Container>
      {info.map(item => (
        <Form key={item.id} initialData={item}>
          <Input name="name"placeholder=""/>
          <Input name="email" placeholder=""/>
          <Input name="social" placeholder=""/>
          <Input name="phone" placeholder=""/>
          <Input name="cep" placeholder=""/>
          <Input name="address" placeholder=""/>
          <Input name="open_to" placeholder=""/>
          <Input name="latitude" placeholder=""/>
          <Input name="longitude" placeholder=""/>
          <Input name="paymentform" placeholder=""/>
          <Input name="obs" placeholder=""/>
          <Input name="ticket" placeholder=""/>
          <Input name="ticket2" placeholder=""/>
          <Input name="ticket3" placeholder=""/>
          <Input name="ticket4" placeholder=""/>
          <Input name="highlight" placeholder=""/>
        </Form>
      ))}
    </Container>
  );
}

