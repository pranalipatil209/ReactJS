import React from 'react'

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tag : "This is the tag from state.",
      "content" : "This is the content from state."
    }
  }
    render (){
    var fileName={
      color: 'green'
    }
      return (
        <div>
          <hr/>
          <text style={fileName}>Demo.JSX</text>
          <hr/>
          <Tag tagProp = {this.state.tag} />
          <Content contentProp = {this.state.content} />
        </div>
      );
    }
  }
  class Tag extends React.Component {
    render (){
      return (
        <div>
          <h2>{this.props.tagProp}</h2>
        </div>
      );
    }
  }
  class Content extends React.Component {
    render(){
      return (
        <div>
          <h2>{this.props.contentProp}</h2>
        </div>
      )
    }
  }

export default Demo;
