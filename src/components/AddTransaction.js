import React, { useState, useContext } from 'react'
import '../css/App.css'
import '../css/Transactions.css'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addNewTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            text,
            amount : +amount
        }
        addNewTransaction(payload);
    }


  return (
    <div className='add-transaction'>
        <h3>Add new Transaction</h3>
        <hr />
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' id = 'text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text ...'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='text'>Amount <br /> (negative - expense , positive income)</label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount ...'></input>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction