export function addToEdit(item) {
    return {
        type: 'ADD_TO_EDIT',
        item
    };
};

export function addRequest(formulario) {
    return {
        type: 'ADD_COMPANY_REQUEST',
        payload: { formulario },
    };
}

// export function addCompany(formulario) {
//     return {
//         type: 'ADD_COMPANY_SUCCESS',
//         payload: { formulario }
//     }
// }

export function addCompanyFailure() {
    return {
        type: 'ADD_COMPANY_FAILURE',
    };
}