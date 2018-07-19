import React, { Component } from "react";
import { CartService } from "../../services/cart-service.service";
import './recipe-detail.component.css';
import { RecipeService } from "../../services/recipe.service";

export class RecipeDetail extends Component {
    recipeSvc=new RecipeService();
    state ={};
    createRow(listItem,index) {
        const rows = (<li key={index}>{listItem}</li>);
        return rows;
    };

    componentDidMount(){
        this.setState({selectedRecipe:this.props.selectedRecipe}); 
    } 

    componentDidUpdate(prevProps, prevState){
         let recipeID;
         if(!!this.props.match && !!this.props.match.params.id){
             recipeID=this.props.match.params.id;
         }
         this.selectedRecipe=this.recipeSvc.getRecipe(recipeID);
         if(!!recipeID && recipeID != prevState.selectedRecipe.recipe_id){
         this.setState({selectedRecipe:this.selectedRecipe});
         }
    }

    addToCart(){
        if(!!this.state.selectedRecipe){
          CartService.addToCart(this.state.selectedRecipe);
        }
      }
    
    render() {
        if (!this.state.selectedRecipe || Object.keys(this.state.selectedRecipe).length === 0) {
            return (<div></div>);
        }
        const table = (
            <div className="height100pc width100pc">
                <div className="flex-column-container height100pc">
                    <div className="flex-row-container flex-item textAlignCenter height55pc" >
                        <div className="flex-item height100pc">
                            <img src={this.state.selectedRecipe.image_url} className="height100pc" />
                        </div>
                        <div className="flex-item text-block">
                            <h2>{this.state.selectedRecipe.title}</h2>
                        </div>
                        <div className="flex-item ">
                            <button type="button" className="add-to-cart"
                            onClick={this.addToCart.bind(this)}>Add</button>
                        </div>
                    </div>

                    <div className="flex-row-container flex-item darkGreyBG height45pc">
                        <div className="flex-item text-block whiteTextColor width40pc marginLeft5pc height100pc">
                            <h2 className="height20pc no-margin">Ingredients:</h2>
                            <ul className="height80pc no-margin overflow-hidden">
                                {this.state.selectedRecipe.ingredients.map(this.createRow)}
                            </ul>
                        </div>
                        <div className="flex-item text-block whiteTextColor width60pc height100pc">
                            <h2 className="height20pc no-margin">Directions:</h2>
                            <ul className="height80pc no-margin  overflow-hidden">
                                {this.state.selectedRecipe.directions.map(this.createRow)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        return table;
    }
}

