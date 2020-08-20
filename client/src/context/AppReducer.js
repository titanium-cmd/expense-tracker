const Reducer = (state, action) => {
    switch(action.type){
        case 'GET':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE':
            return {
                ...state, 
                transactions: state.transactions.filter((transaction)=>transaction._id !== action.payload)
            }
        case 'ADD':
            return {
                ...state, transactions: [...state.transactions, action.payload]
            }
        case 'GET_ERROR':
            return {
                ...state, 
                loading: true,
                error: action.payload
            }
        default:
            return state;
    }
}
export default Reducer;