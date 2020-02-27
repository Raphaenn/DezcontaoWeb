// Faz a combinação de todos os reducer do projeto

import { combineReducers } from "redux";

import Edit from "./edit/reducer";

export default combineReducers({
    Edit,
});