import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";

import api from "../../services/api";
import { Container, Title, Top, First, Middle } from './styles';
import Grafic from "../../components/Grafic";
import Table from "../../components/Table";

export default function Home() {

  const [ card, setCard ] = useState([]);
  const [ card2, setCard2 ] = useState([]);

  useEffect(() => {
    async function CatchData() {
      const response = await api.get('cupom');
      const response2 = await api.get("companies");

      const dados = response.data.map(item => item);
      const dados2 = response2.data.map(item => item);

      setCard(dados)
      setCard2(dados2)
    }
    CatchData();
  }, []);


  return (
    <Container>
      <Top>
        <Title>Dashboard</Title>
      </Top>
      {/* <MdSearch size={20} color="#666666" position="absolute;" /> */}
      <First>
        <div><strong>EMPRESAS</strong> <small>{card2.length}</small> </div>
        <div><strong>DOWNLOADS APP</strong> <small>7</small> </div>
        <div><strong>CUPONS GERADOS</strong> <small>{card.length}</small> </div>
        <div><strong>CUSTO DE NÚVEM</strong> <small>R$500,00</small> </div>
      </First>

      <Middle>
        <Table />
        <Grafic />
      </Middle>

    </Container>
  );
}
