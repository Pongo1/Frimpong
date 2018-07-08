import React, { Component } from 'react';
import './App.css';
import Tab from './Plugs/Tab';

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className = "container">
                <div className = 'row'>
                    <div className = 'col-md-8 col-lg-8 offset-md-2 col-sm-10  col-xs-12'>
                        <Tab />
                    </div>
                </div>
            </div>
           
      </div>
    );
  }
}

const styles = { 
    Name:{
        color:'white'
    }
}
export default App;
