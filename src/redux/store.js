<<<<<<< HEAD
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;
=======
import { createStore,compose,applyMiddleware } from "redux";
import thunk from'redux-thunk';

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

>>>>>>> 94fba42 (Basic SPA without image)
export default store;