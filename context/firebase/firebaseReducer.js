import { 
    GET_MENU, 
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MENU:
            return {
                ...state,
                products: action.payload
            }
    
        default:
            return state;
    };
};