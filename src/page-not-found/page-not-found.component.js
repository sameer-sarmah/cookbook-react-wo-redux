import React, { Component } from "react";

export class PageNotFoundComponent extends Component {
  
  componentDidMount(){
    console.log("PageNotFoundComponent initialized");
  }

  render() {
    const panel = (
      <h3>This page was not found!</h3>
    );
    return panel;
  }

}
