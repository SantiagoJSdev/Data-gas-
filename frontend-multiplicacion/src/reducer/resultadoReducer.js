import { types } from "../types/types";



export const resultadoReducer = (state = {}, action) => {


    switch (action.type) {
        case types.postResul:
            return {
                ...state,
                postResultado: action.payload,
                // resultado: [],
                errors: {}
            }
        case types.validate:
            return {
                ...state,
                errors: action.payload
            }
        case types.deleteResultado:
            return {
                ...state,
                resultado: action.payload
            }
        case types.historial:
            return {
                ...state,
                resultado: action.payload,
                postResultado: ''
            }

        default:
            return state;
    }

}