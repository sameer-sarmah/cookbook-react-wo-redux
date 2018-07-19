import React, { Component } from "react";
import './shopping-list.component.css';
import { CartService } from "../services/cart-service.service";

export class ShoppingListComponent extends Component {

  state ={};
  
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.setState({recipes:CartService.getRecipesInCart()})
  }
  render() {
    if (!this.state.recipes || this.state.recipes.length == 0) {
      return (
        <div>
          <p>The Shopping cart is empty</p>
        </div>
      );
    }
    else {
     return ( <div className="flex-item flex-row-container width100pc height100pc align-center" >
        <div >
          {this.state.recipes.map(this.createRow.bind(this))}
        </div>
      </div>);
    }
  }


  createRow(addedRecipe) {
    const item = (
      <div className="flex-row-container list-item align-center" key={addedRecipe.recipe_id}>
        <div className="image-container flex-item">
          <img src={addedRecipe.image_url} />
        </div>
        <div className="text-container flex-column-container flex-item">
          <h3 className="flex-item">Recipe Item:{addedRecipe.recipe_id}</h3>
          <h3 className="flex-item">{addedRecipe.title}</h3>
          <div className="flex-item">Social Rank:{addedRecipe.social_rank}</div>
        </div>
        <div className="flex-row-container list-item align-center">
          <div className="flex-item svg-icon" onClick={this.removeFromCart.bind(this, addedRecipe)}>
            <img src={require("../images/rubbish-bin.svg")} />
          </div>
        </div>
      </div>);
    return item;
  }

  removeFromCart(recipe) {
    CartService.removeFromCart(recipe.recipe_id);
    this.setState({recipes:CartService.getRecipesInCart()})
  }
}


