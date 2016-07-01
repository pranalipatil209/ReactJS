import React from 'react';

class ComponentApi extends React.Component {
  constructor(){
    super();

    this.state = {
      data : []
    }
    this.setStateHandler = this.setStateHandler.bind(this);
  }
  setStateHandler(){
    var item = "setState....";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray})
  }
  render(){
    var fileName = {
      color : green;
    }
    return (
      <div>
        <text styel=fileName>This is ComponentApi.JSX</text>
        <button onClick={this.setStateHandler}>Set State</button>
        <h3>State Array : {this.state.data}</h3>
      </div>
    );
  }
}

export default ComponentApi;
