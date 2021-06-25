import React, {useReducer} from 'react';
import OrderContext from './ordersContext';
import orderReducer from './orderReducer';
import { 
    GET_ORDER, 
} from '../../types';

const OrderState = (props) => {

    const initialState = {
        order: [],
    }
    
    const [state, distpach] = useReducer(orderReducer, initialState);

    
    return ( 
        <OrderContext.Provider
            value={{
                order: state.order,
            }}
        >
            {props.children}
        </OrderContext.Provider>
     );
}
 
export default OrderState;