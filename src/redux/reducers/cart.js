const initialState = {
    items: {},
    totalPrice: 0,
    totalItem: 0,
};
const getTotalPrice = arr => {
    return arr.reduce((sum, obj) => Number(obj.price) + sum, 0);
}
const cart = (state = initialState, action) => {
    if (action.type === 'ADD_PIZZA_CART') {
        const currentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]
        const newItems = {
            ...state.items,
            [action.payload.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems)
            }
        }
        const allPizzas = [].concat.apply([], Object.values(newItems).map((obj) => obj.items))
        const allPrice = getTotalPrice(allPizzas)
        return {
            ...state,
            items: newItems,
            totalItem: allPizzas.length,
            totalPrice: allPrice

        }
    }
    else if (action.type === 'CLEAR_CART') {
        return {
            totalItem: 0,
            totalPrice: 0,
            items: {}
        }
    }
    else
        return state

}
export default cart;