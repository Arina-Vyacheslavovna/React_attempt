import {userReducer} from '../features/userReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {productsReducer} from './reducer'
import thunk from 'redux-thunk';


export const store = createStore(combineReducers({
    products: productsReducer,
    user: userReducer
  }), applyMiddleware(thunk));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  