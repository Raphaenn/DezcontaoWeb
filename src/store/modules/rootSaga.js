import { all } from 'redux-saga/effects'; 

import edit from "./edit/sagas";

export default function* rootSaga() {
    return yield all([edit]);
}