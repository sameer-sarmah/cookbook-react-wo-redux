
import { ADD_TO_CART,DELETE_FROM_CART,GET_RECIPES_IN_CART } from '../actions/types';

export default function(cart = {recipes:[]}, action) {
  switch (action.type) {
    case ADD_TO_CART:{
      const recipes =action.payload
      return {recipes:recipes};
    }
    case DELETE_FROM_CART:{
        let recipes =action.payload;
        if(!recipes){
          recipes=[];
        }
        return {recipes:recipes};
    }
    case GET_RECIPES_IN_CART:{
        const identity=(recipe)=>{return recipe};
        const recipes=action.payload.map(identity);
        return {recipes:recipes};
    }
     default:
     return cart; 
  }
}