import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

// import history from '../../../services/history';
import api from "../../../services/api";
import { addCompanyFailure, updateProfileSuccess,updateCompanyFailure } from "./actions";

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
            highlight: false,
        });

        toast.success('Cadastro realizado com sucesso!');


    } catch (err) {
        toast.error('Erro ao cadastrar empresa, confira os dados!');
        yield put(addCompanyFailure())
    }

}

export function* updateCompany({ payload }) {

    try {

        const { id, name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight, category } = payload.data; 

        const CompanyData = { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight, category }

        const response = yield call(api.put, `companies/${id}`, CompanyData);

        toast.success('Dados atualizados com sucesso!');

        yield put(updateProfileSuccess(response.data))

        // history.push('home'); -> caso queira futuramente redirecionar para home page

    } catch(err) {
        toast.error('Erro ao atualizar dados, tente novamente.');
        yield put(updateCompanyFailure())
    }

}

export default all([
    takeLatest('ADD_COMPANY_REQUEST', CompanyRegister),
    takeLatest('UPDATE_COMPANY_REQUEST', updateCompany),
]);