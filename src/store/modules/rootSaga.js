import { all } from 'redux-saga/effects'; 

import Edit from "./edit/reducer";

export default function* rootSaga() {
    return yield all([Edit]);
}