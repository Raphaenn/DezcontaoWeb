import React, { useState, useEffect } from 'react';

import { Container, Title } from './styles';
import Grafic from "../../components/Grafic";
import Table from "../../components/Table";

export default function Home() {


  return (
    <Container>
      <Title>Companies Data</Title>
      <Table />
    </Container>
  );
}
