const initialState = {
    items: [],
<<<<<<< HEAD
    isLoaded: false
=======
    activePage:1,
    totalCount:0
    
>>>>>>> 94fba42 (Basic SPA without image)
}
const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payload,
        }
    }
<<<<<<< HEAD
=======
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
>>>>>>> 94fba42 (Basic SPA without image)
    return state;
}
export default pizzas;