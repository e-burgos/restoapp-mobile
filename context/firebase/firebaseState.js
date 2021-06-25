import React, {useReducer} from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import firebase from '../../firebase/index';
import { 
    GET_MENU, 
} from '../../types';

const FirebaseState = (props) => {

    const initialState = {
        menu: [],
    }
    
    const [state, distpach] = useReducer(firebaseReducer, initialState);

    
    return ( 
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
     );
}
 
export default FirebaseState;