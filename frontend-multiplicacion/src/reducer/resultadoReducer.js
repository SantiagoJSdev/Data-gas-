import { types } from "../types/types";



export const resultadoReducer = (state = {}, action) => {


    switch (action.type) {
        case types.postResul:
            return {
                ...state,
                resultado: action.payload,
                errors: {}
            }
        case types.validate:
            return {
                ...state,
                errors: action.payload

            }

        default:
            return state;
    }

}