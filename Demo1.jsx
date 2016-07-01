import React from 'react';
import ReactDOM from 'react-dom';

class Demo1 extends React.Component {
  constructor(){
    super();

    this.state = {
      data : []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.getDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  setStateHandler(){
    var item = "setState....";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray})
  };

  forceUpdateHandler() {
      this.forceUpdate();
   };

   findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'blue';
   }

  render(){
    var fileName = {
      color : 'green'
    }
    return (
      <div>
        <hr/>
        <text style={fileName}>This is Demo1.JSX</text>
        <hr/>

        setState() method :<br/><br/>
        <button onClick={this.setStateHandler}>Set State</button>
        <h3>State Array : {this.state.data}</h3>

        forceUpdate() method :<br/><br/>
        <button onClick = {this.forceUpdateHandler}>Force Update</button>
        <h4>Random number: {Math.random()}</h4>

        ReactDOM.findDOMNode() method :<br/><br/>
        <button onClick = {this.findDomNodeHandler}>Manipulate the DOM</button><br/><br/>
        <div id = 'myDiv'>The color gets changed by method findDOMNode()</div>
        
      </div>
    );
  }
}

export default Demo1;
