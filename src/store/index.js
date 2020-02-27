import { createStore } from "redux";

import rootReducer from "./modules/rootReducer"; // Faz a combinação de todos os reducer do projeto

const store = createStore(rootReducer); // Create Store nao pode ficar vazio, tem que passar a funcao reducer dentro

export default store;