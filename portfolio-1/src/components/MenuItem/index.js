import React from "react";

export default class MenuItem extends React.Component {

  render() { 

    let passId = "menu-item-" + this.props.itemId;
    let passPrice = "$" + this.props.itemPrice;
    let passName = this.props.itemName;
    let passDescription = this.props.itemDescription;

    return (
      <>
        <div className="menu-item" id={passId}>
          <h2>{passName}</h2>
          <p>{passDescription}</p><span>{passPrice}</span>
          <button>Add to Cart</button>
        </div>
      </>  
      )
  }
}