const initialState = {
    items: [],
    activePage:1,
    totalCount:0
    
}
const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }
    if(action.type==='SET_COUNT'){
        return{
            ...state,
            totalCount:action.payload
        }
    }
    else if(action.type ==="SET_CURRENT_PAGE"){
        return{
            ...state,
            activePage:action.payload
        }
    }
    return state;
}
export default pizzas;