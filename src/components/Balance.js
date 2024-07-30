import React, {useContext} from 'react'
import '../css/Balance.css'
import '../css/App.css'
import { GlobalContext } from '../context/GlobalState'



function Balance() {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(txn => +txn.amount)
  const total = amounts.reduce((acc, item) => (acc + item), 0);

  return (
    <div className="balance">
            <p className="balance-heading">YOUR BALANCE</p>
            <h2 className="margin-0">${total}</h2>
    </div>
  )
}

export default Balance