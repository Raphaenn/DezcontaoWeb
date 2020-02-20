import React, { useState, useEffect } from 'react';

import { Container, Title, Top, First } from './styles';
import Grafic from "../../components/Grafic";
import Table from "../../components/Table";

export default function Home() {


  return (
    <Container>
      <Top>
        <Title>Dashboard</Title>
      </Top>
      <First>
        <div>Campo 1 - Qtd. de empresas parceiras</div>
        <div>Campo 2 - N de usuário ativos</div>
        <div>Campo 3 - Qtd. de tickets utilizados</div>
        <div>Campo 4 - Notivifações</div>
      </First>
      <Table />
    </Container>
  );
}
