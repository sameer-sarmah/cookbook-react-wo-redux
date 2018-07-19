import { combineReducers } from 'redux';
import RecipeReducer from './recipe-reducer';
import ShoppingCartReducer from './shopping-cart-reducer';

const rootReducer = combineReducers({
recipe:RecipeReducer,
cart:ShoppingCartReducer
});

export default rootReducer;