<<<<<<< HEAD
import filtersReducer from './filter';
import pizzasReducer from "./pizzas";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
=======
import filters from './filter';
import pizzas from "./pizzas";
import cart from "./cart";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
>>>>>>> 94fba42 (Basic SPA without image)
})
export default rootReducer;