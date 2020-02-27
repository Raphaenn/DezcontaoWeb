import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdSearch, MdEdit } from "react-icons/md";

import api from "../../services/api";

import Pagination from "../Pagination";
import { Grafic1, FirtFrame, Desc, Contents, SearchBar } from './styles';

export default function Table() {

    const [ Cdata, setCdata ] = useState([]);
    const [ filtro, setFiltro ] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(5);

    useEffect(() => {
    async function loadInfo() {
        const response = await api.get('companies');
        
        setCdata(response.data)
    }
    loadInfo();
    }, []);

    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = Cdata.slice(indexOfFirstList, indexOfLastList);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    function handleSearch(event) {
      setFiltro(event.target.value);
    }

    const filterlist = currentList.filter(
      (lista) => {
        return lista.name.toLowerCase().indexOf(filtro) !== -1;
      }
    )

  return (
    <Grafic1>
        <Contents>
          <caption>Companies Data</caption>
          <nav>
          <MdSearch size={20} color="#666666" />
          <SearchBar type="text" value={filtro} onChange={handleSearch} placeholder="Search" />
          </nav>
        </Contents>
        <FirtFrame>
          <thead>
            <tr>
              <th>Logo</th>
              <th>Empresa</th>
              <th>Categoria</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {
              filterlist.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.path.url} />
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.categories.name}</p>
                  </td>
                  <td>
                    <Link to={`detalhes/${item.id}`}>
                      <MdEdit size={20} color="#666666" />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
          <div></div>
        </FirtFrame>
        <Desc>Showing products to {listPerPage} of {Cdata.length}</Desc>
        <Pagination 
          listPerPage={listPerPage}
          totalPages={Cdata.length}
          paginate={paginate}
        />
    </Grafic1>
  );
}
