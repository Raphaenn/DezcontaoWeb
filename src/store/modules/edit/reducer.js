import produce from "immer";

const INITIAL_STATE = {
    dados: [],
};

export default function edit(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_EDIT':
            return produce(state, draft => {
                draft.dados = action.item;
            });

        // case 'ADD_COMPANY_SUCCESS':
        //     return produce(state, draft => {
        //         draft.dados = action.payload.item
        //         console.tron.log("reducer ok")
        //     })
            
        default:
            return state;
    }
}