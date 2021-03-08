import React from "react";
import MenuItem from "../MenuItem";

export default class Menu extends React.Component {
  render() {
    
        let menuApp = this.props.menuItems.map((index, key) => {
          return <MenuItem key={key} {...index}></MenuItem>
        })
    
    return (
      <div className="menu">
          <h1>{this.props.menuName} Menu</h1>
          {menuApp}
      </div>
      )
  }
}