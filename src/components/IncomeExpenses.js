import React, { useContext} from 'react'
import '../css/Expense.css'
import '../css/App.css'
import { GlobalContext } from '../context/GlobalState'


function IncomeExpenses() {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(txn => txn.amount)
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);

  return (
    <div className="expenditure">
    <div className="expense">
        <h4>INCOME</h4>
        <p className="exp-val-inc">${income}</p>
    </div>
    <div className="expense">
        <h4>EXPENSE</h4>
        <p className="exp-val-exp">${Math.abs(expense)}</p>
    </div>
</div>
  )
}

export default IncomeExpenses