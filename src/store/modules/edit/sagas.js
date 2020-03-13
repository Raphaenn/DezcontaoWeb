import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from '../../../services/history';
import api from "../../../services/api";
import { addCompany, addCompanyFailure } from "./actions";

export function* CompanyRegister({ payload }) {

    try {
        const { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket } = payload.formulario; 

        yield call(api.post, 'companies', {
            name,
            email,
            social,
            phone,
            cep,
            address,
            open_to,
            latitude,
            longitude,
            paymentform,
            obs,
            ticket,
            path1: 1,
            category: 1,
            highlight: false
        });

        toast.success('Cadastro realizado com sucesso!');


    } catch (err) {
        toast.error('Erro ao cadastrar empresa, confira os dados!');
        yield put(addCompanyFailure())
    }

}

export default all([
    takeLatest('ADD_COMPANY_REQUEST', CompanyRegister)
]);