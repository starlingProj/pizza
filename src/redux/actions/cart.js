export const addPizzatoCart=(pizzaObj)=>({
    type:'ADD_PIZZA_CART',
    payload:pizzaObj,
});
export const clearCart=()=>({
    type:'CLEAR_CART',
});