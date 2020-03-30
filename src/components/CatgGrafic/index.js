import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar'

import { Container } from './styles';
import api from "../../services/api";
import test from "../../services/test.json"

export default function CatGrafic({}) {

    const [ categorias, setCategorias ] = useState([]);
    const [ chartData, setChartData ] = useState({});

    const testando = test;
    const filtrando = testando.map(item => item.categories.name);
    const somatorio = testando.reduce(function( object , item ){  
        if ( !object[item.categories.name] ) {
           object[item.categories.name]=1;
        } else {
           object[item.categories.name]++;
        }
        return object; 
      },{});  

    console.tron.log(somatorio);

    useEffect(() => {
        async function loadCat() {
            const response = await api.get('categories');
            
            const nomes = response.data.map(item => item.name);
            

            setCategorias(nomes);
        }
        loadCat();
        }, []);

  return (
    <Container>
      <ResponsiveBar
      data={[somatorio]}
      keys={categorias}
      indexBy="Cupoms"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'sandwich'
              },
              id: 'lines'
          }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Cupons',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
  />
    </Container>
  );
}
