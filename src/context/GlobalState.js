import React, {createContext, useReducer } from 'react' ;
import AppReducer from './AppReducer';


//Initial state
const initialState = {
    transactions : [
    ]
}

//create context
export const GlobalContext = createContext(initialState) ;

export const GlobalProvider = ( {children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions call the reducer
    function deleteTransaction(id) {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        )
    }

    function addNewTransaction(payload) {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: payload
            }
        )
    }

    return (
        <GlobalContext.Provider value={{transactions : state.transactions, deleteTransaction, addNewTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

