const initialState = {
    items: {},
    totalPrice: 0,
    totalItem: 0,
  };
  
  const getTotalPrice = (arr) => arr.reduce((sum, obj) => Number(obj.price)+ sum, 0);
  
  const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
  const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PIZZA_CART': {
        const currentPizzaItems = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];
  
        const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: getTotalPrice(currentPizzaItems),
          },
        };
  
        const totalItem = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');
  
        return {
          ...state,
          items: newItems,
          totalItem,
          totalPrice,
        };
      }
  
      case 'REMOVE_CART_ITEM': {
        const newItems = {
          ...state.items,
        };
        const currentTotalPrice = newItems[action.payload].totalPrice;
        const currenttotalItem = newItems[action.payload].items.length;
        delete newItems[action.payload];
        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - currentTotalPrice,
          totalItem: state.totalItem - currenttotalItem,
        };
      }
  
      case 'PLUS_CART_ITEM': {
        const newObjItems = [
          ...state.items[action.payload].items,
          state.items[action.payload].items[0],
        ];
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPrice(newObjItems),
          },
        };
  
        const totalItem = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');
  
        return {
          ...state,
          items: newItems,
          totalItem,
          totalPrice,
        };
      }
  
      case 'MINUS_CART_ITEM': {
        const oldItems = state.items[action.payload].items;
        const newObjItems =
          oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPrice(newObjItems),
          },
        };
  
        const totalItem = getTotalSum(newItems, 'items.length');
        const totalPrice = getTotalSum(newItems, 'totalPrice');
  
        return {
          ...state,
          items: newItems,
          totalItem,
          totalPrice,
        };
      }
  
      case 'CLEAR_CART':
        return { totalPrice: 0, totalItem: 0, items: {} };
  
      default:
        return state;
    }
  };
  
  export default cart;