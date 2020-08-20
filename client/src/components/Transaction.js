import React, {useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const amount = transaction.amount;
    const sign = amount < 0 ? '-' : '+';

    return (
        <>
            <li className={sign === '-' ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(amount)}</span><button onClick={()=>deleteTransaction(transaction._id)} className="delete-btn">x</button>
            </li> 
        </>
    )
}

export default Transaction
