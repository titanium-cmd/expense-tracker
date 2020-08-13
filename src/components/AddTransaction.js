import React, {useState} from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
