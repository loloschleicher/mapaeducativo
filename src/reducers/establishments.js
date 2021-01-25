import { actionTypes } from '../actions/actionTypes';
    
export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_ESTABLISHMENTS:
            return action.establishments
        case actionTypes.DELETE_ESTABLISHMENTS:
            return [...state = []];
        default:
            return state;
    }
}
    
