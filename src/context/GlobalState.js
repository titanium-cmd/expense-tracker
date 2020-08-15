import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initail state
const initialState = {
    transactions: [
        {id: 1, text: 'Baseball', amount: -20},
        {id: 2, text: 'Salary', amount: 100},
        {id: 3, text: 'Commission', amount: 85},
        {id: 4, text: 'Painting', amount: -52}
    ]
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD', 
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            deleteTransaction, addTransaction
         }}>
            {children}
        </GlobalContext.Provider>
    );
}