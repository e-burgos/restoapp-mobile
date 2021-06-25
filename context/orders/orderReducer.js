import { 
    GET_ORDERS, 
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                order: action.payload
            }
    
        default:
            return state;
    };
};