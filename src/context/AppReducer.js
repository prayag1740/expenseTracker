
export default (state, action) => {

    switch(action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions : state.transactions.filter(txn => txn.id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            const id = Math.floor(Math.random()*1000);
            const newTxn = {'id' : id, 'text' : action.payload.text , 'amount' : action.payload.amount}
            return {
                ...state,
                transactions : [...state.transactions, newTxn]
            }


        default:
            return state
    }
}