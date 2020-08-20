import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initail state
const initialState =  {
    transactions: [], 
    error: null, 
    loading: true
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 
    const deleteTransaction = async (id) => {
        try {
            fetch(`/transaction/${id}`, {method: 'DELETE'});
            dispatch({
                type: 'DELETE',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'GET_ERROR', 
                payload: err
            });
        }
    }

    const addTransaction = async (transaction) => {
        try {
            const res = await fetch('/transaction', {
                method: 'POST', 
                body: JSON.stringify(transaction), 
                headers: {'Content-Type': 'application/json'}
            });
            // console.log(res.json());
            
            dispatch({
                type: 'ADD', 
                payload: res.json()
            });
        } catch (error) {
            dispatch({
                type: 'GET_ERROR', 
                payload: error
            });
        }
    }

    const getTransactions = async () => {
        try {
            const transactionRes = await fetch('/transaction');
            const transaction = await transactionRes.json();

            dispatch({
                type: 'GET', 
                payload: transaction.data
            });
        } catch (err) {
            dispatch({
                type: 'GET_ERROR', 
                payload: err
            });
        }
    }

    return(
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions, deleteTransaction, addTransaction
         }}>
            {children}
        </GlobalContext.Provider>
    );
}