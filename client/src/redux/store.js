
 
import {createStore,combineReducers, applyMiddleware} from "redux" ;
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { getProductsReducer } from "./reducers/productreducer";
import { getSingleProductReducer } from "./reducers/productreducer";




const reducer= combineReducers({
    
    getProducts:getProductsReducer,
    getSingleProductDeatils:getSingleProductReducer
})

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;