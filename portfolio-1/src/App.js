import React from 'react';
import Food from './components/Food';
import Drinks from './components/Drinks';
import Homepage from './components/Homepage';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {screenSelect: "home"}
  }
  
  render() {
    let screen;

    //Creating a menu to display different components on button click
    switch (this.state.screenSelect) {
      case "home":
        screen = (
          <div>
            <nav className="navigation">
              <h1>Home</h1>
              <button onClick={() => this.setState({screenSelect: "home"})}>Home</button>
              <button onClick={() => this.setState({screenSelect: "food"})}>Food</button>
              <button onClick={() => this.setState({screenSelect: "drinks"})}>Drinks</button>
            </nav>
            <Homepage />
          </div>
        )
        break;
      
      case "food":
        screen = (
          <div>
            <nav className="navigation">
              <h1>Main Course</h1>
              <button onClick={() => this.setState({screenSelect: "home"})}>Home</button>
              <button onClick={() => this.setState({screenSelect: "food"})}>Food</button>
              <button onClick={() => this.setState({screenSelect: "drinks"})}>Drinks</button>
            </nav>
            <Food />
          </div>
        )
        break;

      case "drinks":
        screen = (
          <div>
            <nav className="navigation">
              <h1>Drinks</h1>
              <button onClick={() => this.setState({screenSelect: "home"})}>Home</button>
              <button onClick={() => this.setState({screenSelect: "food"})}>Food</button>
              <button onClick={() => this.setState({screenSelect: "drinks"})}>Drinks</button>
            </nav>
            <Drinks />
          </div>
        )
        break;
    
      default:
        screen = (
            <nav className="navigation">
              <h1>Home</h1>
              <button onClick={() => this.setState({screenSelect: "home"})}>Home</button>
              <button onClick={() => this.setState({screenSelect: "food"})}>Food</button>
              <button onClick={() => this.setState({screenSelect: "drinks"})}>Drinks</button>
            </nav>
        )
        break;
    }
    return screen;
  }
}