import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      data:[
        {
          "id" : "1",
          "name" : "Pranali",
          "age" : "22"
        },
        {
          "id" : "2",
          "name" : "Chandan",
          "age" : "24"
        },
        {
          "id" : "3",
          "name" : "Paresh",
          "age" : "80"
        }
      ]
    }
  }
  render(){
    var i = 1;
    var myStyle={
      color: 'red'
    }
    var fileName={
      color: 'green'
    }
    return (
        <div>
        <hr/>
        <text style={fileName}>App.JSX</text>
        <hr/>
        <h6>-The header is rendered from child component-</h6>
        <Header />
        <h6>-Table-</h6>
        <h6>-rows are rendered dynamically from states-</h6>
        <table>
          <tbody>
            {this.state.data.map((person,i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>
        <h6>-The style has changed dynamically-</h6>
        <h1 style={myStyle}>Hello Pranali !! Welcome to React</h1>
        <h3>Start playing it.....</h3>
        <h1>{i == 1 ? 'True!' : 'False'}</h1>
        <h6>-The footer is rendered from child component-</h6>
        <Footer />
        </div>
    );
  }
}
class Header extends React.Component {
  render(){
    return (
      <div>
        <p>It's a header</p>
      </div>
    )
  }
}
class Footer extends React.Component {
  render(){
    return (
      <div>
        <p>It's a Footer</p>
      </div>
    )
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <h3>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
        </h3>
      </tr>
    )
  }
}

export default App;
