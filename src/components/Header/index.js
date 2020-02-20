import React from 'react';
import { Link } from "react-router-dom";

import name from "../../assets/Name.png"
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
        <Content>
          <nav>
            <img src={name} alt="Dezcontao" />
            <Link to="/home">Home</Link>
          </nav>

          <aside>

            <Profile>
              <div>
                <strong>Raphael Neves</strong>
                <Link to="/home">Meu perfil</Link>
              </div>
              <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Profile" />
            </Profile>
          </aside>


        </Content>
    </Container>
  );
}
