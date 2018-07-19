
import { FETCH_RECIPES,SELECT_RECIPE,FETCH_RECIPE } from '../actions/types';

export default function(state = {recipes:[],selectedRecipe:{}}, action) {
  switch (action.type) {
    case FETCH_RECIPES:{
      const recipes =action.payload
      return {recipes:recipes,selectedRecipe:state.selectedRecipe};
    }

    case FETCH_RECIPE:{
      let selectedRecipe = action.payload;
      return {recipes:state.recipes,selectedRecipe:selectedRecipe};
    }

    case SELECT_RECIPE:{
      let selectedRecipe = action.payload;
      return {recipes:state.recipes,selectedRecipe:selectedRecipe};
    }
     default:
     return state; 
  }
}