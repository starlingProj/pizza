const initialState = {
<<<<<<< HEAD
    sotrBy: 'popular',
    category: 0
}
const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    return state;
}
=======
    sortBy: {
        type: '-rating',
      },
    category: {
      catName:null,
      catId:null
    }
}
const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
      return {
        ...state,
        sortBy: action.payload,
      };
    }
    if (action.type === 'SET_CATEGORY') {
     
      return {
        ...state,
        category: action.payload,
      };
    }
    return state;
  };
>>>>>>> 94fba42 (Basic SPA without image)
export default filters;