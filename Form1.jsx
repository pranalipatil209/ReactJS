import React from 'react';
import ReactDOM from 'react-dom';

class Form1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : 'Hello Pranali....'
    }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
  };

  updateState(e) {
      this.setState({data: e.target.value});
   }

   clearInput(){
      this.setState({data:' '});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }

   render() {
    var fileName = {
      color : 'green'
    }
    return (
      <div>
        <hr/>
          <text style={fileName}>Form1.JSX</text>
        <hr/>
        <input type='text' value={this.state.data} onChange={this.updateState} />
        <button ref="myInput" onClick={this.clearInput}>Clear</button>
        <h3>{this.state.data}</h3>
      </div>
    )
  }
}

export default Form1;
