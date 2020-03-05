import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import persistedReducer from "./persistReducers";

import rootReducer from "./modules/rootReducer"; // Faz a combinação de todos os reducer do projeto
import rootSaga from "./modules/rootSaga"; // Faz a combinação de todos os reducer do projeto

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === "development" ? 
compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)

const store = createStore(persistedReducer(rootReducer), enhancer); // Create Store nao pode ficar vazio, tem que passar a funcao reducer dentro
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };