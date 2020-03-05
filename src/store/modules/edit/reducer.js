import produce from "immer";

const INITIAL_STATE = {
    dados: [],
};

export default function edit(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_EDIT':
            return produce(state, draft => {
                draft.dados = action.item;
            })
        default: 
            return state;
    }
}