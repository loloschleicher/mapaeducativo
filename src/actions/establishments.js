import { actionTypes } from './actionTypes';

export const addEstablishments = establishments => {
    return {
        type: actionTypes.ADD_ESTABLISHMENTS,
        establishments
    };
};

export const deleteEstablishments = () => {
    return {
        type: actionTypes.DELETE_ESTABLISHMENTS,
    }
}