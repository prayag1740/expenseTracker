import React, {useContext} from 'react'
import '../css/App.css'
import '../css/Transactions.css'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'



function TransactionList() {

  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <div className='transaction-list'>
        <h3 className='history'>History</h3>
        <hr />
        <ul className='list'>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>) )}
        </ul>
    </div>
  )
}

export default TransactionList