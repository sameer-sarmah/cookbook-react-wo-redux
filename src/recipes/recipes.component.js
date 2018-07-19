import React, { Component } from "react";
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import {RecipeList} from './recipe-list/recipe-list.component';
import { RecipeService } from './../services/recipe.service'
import './recipes.component.css';

export class RecipeComponent extends Component {
   recipes=[];
   selectedRecipe={};
   recipeSvc=new RecipeService();

   constructor(props){
    super(props);
    this.recipes=this.recipeSvc.getRecipes();
    if(!!this.recipes && this.recipes instanceof Array && this.recipes.length>0){
     this.selectedRecipe= this.recipes[0]; 
    }
   } 

   setSelectedRecipe(recipeID){
    this.selectedRecipe=this.recipeSvc.getRecipe(recipeID);
    this.setState({
        recipes: this.recipes,
        selectedRecipe: this.selectedRecipe
       });
   }

    render() {
        const panel = (
            <div className="flex-item flex-row-container height100pc width100pc" >
                <div className="width30pc" >{<RecipeList {...this.props} recipes={this.recipes}/>}</div>
                <div className="width70pc">{<RecipeDetail {...this.props}  selectedRecipe={this.selectedRecipe}/>}</div>
            </div>
        );
        return panel;
    }
}

