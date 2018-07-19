import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import  HeaderComponent  from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-cart/shopping-list.component';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


      <BrowserRouter > 
        <div className="App">
          <HeaderComponent  />
            <Switch>
                <Route exact path="/" component={RecipeComponent} />
                <Route path="/recipes/:id" component={RecipeComponent} />
                <Route exact path="/recipes" component={RecipeComponent} />
                <Route exact path="/cart" component={ShoppingListComponent} />
                <Route  component={PageNotFoundComponent} />
            </Switch>
          </div>
       
      </BrowserRouter>

    );
  }
}

export default App;

